

const SystemIntegrations = () => {
  return (
    <div className="w-full bg-custom-back ">
      <div className="main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[60px]">
            <div className="flex flex-col gap-6 items-center max-w-[959px] text-center">
                <h2 className="heading-h2 border-custom-blue border-[6px] text-white rounded-2xl py-3 px-6">
                System Integrations
                </h2>
                <span className="sub-heading text-white">
                SmartLodge seamlessly integrates with various external systems, ensuring efficient data synchronization and communication across all operations.
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                    <div className="p-6 rounded-2xl gap-10 flex flex-col justify-between bg-[#FAFAFA]">
                        <h3 className="text-[25px] lg:text-[32px] lg:leading-[40px] font-gilroyBold text-custom-heading">HRIS Systems</h3>
                        <span className="flex flex-wrap gap-2 lg:gap-4">
                            <img src="/adp-logo.png" alt="adp logo" />
                            <img src="/oracle-logo.png" alt="oracle logo" />
                            <img src="/sap-logo.png" alt="sap logo" />
                            <img src="/workday-logo.png" alt="workday logo" />
                        </span>
                    </div>
                    <div className="p-6 rounded-2xl gap-10 flex flex-col justify-between bg-[#FAFAFA]">
                        <h3 className="text-[25px] lg:text-[32px] lg:leading-[40px] font-gilroyBold text-custom-heading">Electronic Key Systems</h3>
                        <span className="flex flex-wrap gap-2 lg:gap-4">
                            <img src="/assa-abloy-logo.png" alt="assa abloy logo" />
                            <img src="/consec-logo.png" alt="consec logo" />
                            <img src="/hco-logo.png" alt="hco logo" />
                            <img src="/rbh-logo.png" alt="rbh logo" />
                            <img src="/salto-logo.png" alt="salto logo" />
                        </span>
                    </div>
                    <div className="p-6 rounded-2xl gap-10 flex flex-col justify-between bg-[#FAFAFA]">
                        <h3 className="text-[25px] lg:text-[32px] lg:leading-[40px] font-gilroyBold text-custom-heading">Accounting Systems</h3>
                        <span className="flex flex-wrap gap-2 lg:gap-4">
                            <img src="/jd-edwards-logo.png" alt="jd-edwards logo" />
                            <img src="/oracleNetsuite-logo.png" alt="oracleNetsuite logo" />                            
                            <img src="/quickbooks-logo.png" alt="quickbooks logo" />
                            <img src="/sap-logo.png" alt="sap logo" />
                        </span>
                    </div>
                    <div className="p-6 rounded-2xl gap-10 h-full flex flex-col justify-between bg-[#FAFAFA]">
                        <h3 className="text-[25px] lg:text-[32px] lg:leading-[40px] font-gilroyBold text-custom-heading">Point of Sale Systems</h3>
                        <span className="flex flex-wrap gap-2 lg:gap-4">
                            <img src="/agilsys-logo.png" alt="agilsys logo" />
                            <img src="/ncr-logo.png" alt="ncr logo" />
                            <img src="/squirell-logo.png" alt="squirell logo" />
                            <img src="/world-vector-logo.png" alt="world-vector logo" />
                        </span>
                    </div>
            </div>
      </div>
    </div>
  )
}

export default SystemIntegrations
