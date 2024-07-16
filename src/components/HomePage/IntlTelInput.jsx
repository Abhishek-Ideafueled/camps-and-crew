import intlTelInput from 'intl-tel-input/react';
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback
} from "react"

// make this available as a named export, so react users can access globals like intlTelInput.utils
export { intlTelInput }

const IntlTelInput = forwardRef(function IntlTelInput(
  {
    initialValue = "",
    onChangeNumber = () => {},
    onChangeCountry = () => {},
    onChangeValidity = () => {},
    onChangeErrorCode = () => {},
    usePreciseValidation = false,
    initOptions = {},
    inputProps = {}
  },
  ref
) {
  const inputRef = useRef(null)
  const itiRef = useRef(null)

  // expose the instance and input ref to the parent component
  useImperativeHandle(ref, () => ({
    getInstance: () => itiRef.current,
    getInput: () => inputRef.current
  }))

  const update = useCallback(() => {
    const num = itiRef.current?.getNumber() || ""
    const countryIso = itiRef.current?.getSelectedCountryData().iso2 || ""
    // note: this number will be in standard E164 format, but any container component can use
    // intlTelInput.utils.formatNumber() to convert this to another format
    // as well as intlTelInput.utils.getNumberType() etc. if need be
    onChangeNumber(num)
    onChangeCountry(countryIso)

    if (itiRef.current) {
      const isValid = usePreciseValidation
        ? itiRef.current.isValidNumberPrecise()
        : itiRef.current.isValidNumber()
      if (isValid) {
        onChangeValidity(true)
        onChangeErrorCode(null)
      } else {
        const errorCode = itiRef.current.getValidationError()
        onChangeValidity(false)
        onChangeErrorCode(errorCode)
      }
    }
  }, [
    onChangeCountry,
    onChangeErrorCode,
    onChangeNumber,
    onChangeValidity,
    usePreciseValidation
  ])

  useEffect(() => {
    if (inputRef.current) {
      itiRef.current = intlTelInput(inputRef.current, initOptions)
    }
    return () => {
      itiRef.current?.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // store a reference to the current input ref, which otherwise is already lost in the cleanup function
    const inputRefCurrent = inputRef.current
    if (inputRefCurrent) {
      inputRefCurrent.addEventListener("countrychange", update)
      // when plugin initialisation has finished (e.g. loaded utils script), update all the state values
      itiRef.current.promise.then(update)
    }
    return () => {
      if (inputRefCurrent) {
        inputRefCurrent.removeEventListener("countrychange", update)
      }
    }
  }, [update])

  return (
    <input
      type="tel"
      ref={inputRef}
      onInput={update}
      defaultValue={initialValue}
      {...inputProps}
    />
  )
})

export default IntlTelInput
