import React, { useState } from 'react'

const HistoryCards = () => {

    const [currNum, setCurrNum] = useState(0);

  return (
    <div className='grid grid-cols-1 gap-10 mx-auto'>
      
                <div className=" max-w-[580px] h-[455px]">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2023
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-no-repeat bg-cover bg-bottom-0 bg-history-1 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="max-w-[529px] h-[400px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-xl ">
                            August 2023
                          </span>
                          <p className="font-ttCommonProNormal text-white">
                            The company launches the ability for charter plane
                            pilots and bus drivers to check workers in as they
                            board planes or buses with EnRoute.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
                <div className=" max-w-[580px] h-[455px]">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2022
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-no-repeat bg-cover bg-bottom-0 bg-history-2 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="max-w-[529px] h-[400px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-xl ">
                            September 2022
                          </span>
                          <p className="font-ttCommonProNormal text-white">
                            Roster booking capabilities launch, enabling clients
                            to book rooms or travel reservations weeks or months
                            out for workers on rotating rosters.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
                <div className=" max-w-[580px] h-[455px]">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2021
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-history-3 bg-cover max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="max-w-[529px] h-[400px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-xl ">
                            April 2021
                          </span>
                          <p className="font-ttCommonProNormal text-white">
                            EnRoute goes live managing FIFO travel for workers
                            at a remote mine in Western Africa--our first
                            EnRoute deployment in the region.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                {currNum ===0 ?
                <div 
                onClick={()=>setCurrNum(currNum+1)}
                className='font-gilroyBold text-white w-full text-center underline'>
                Load More
                </div> :
                <>           
                <div className=" max-w-[580px] h-[455px]">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2018
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-cover bg-history-4 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="max-w-[529px] h-[400px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-xl ">
                            July 2018
                          </span>
                          <p className="font-ttCommonProNormal text-white">
                            One of Indonesia’s premier mining companies installs
                            SmartLodge at 15+ worksite lodging facilities at a
                            large-scale mine in Indonesia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
                <div className=" max-w-[580px] h-[455px]">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2017
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-cover bg-history-5 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="max-w-[529px] h-[400px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-xl ">
                            July 2017
                          </span>
                          <p className="font-ttCommonProNormal text-white">
                            EnRoute rolls out the ability to book commercial
                            travel content, inclusive of commercial flights,
                            hotels and rental cars.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>              
                <div className=" max-w-[580px] h-[455px]">
                  <div className="flex flex-col">
                    <h2 className="text-h2 text-custom-button font-gilroyBold">
                      2016
                    </h2>
                    <div className="relative">
                      <div className="absolute inset-0 bg-cover bg-history-6 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                      <div className="max-w-[529px] h-[400px]">
                        <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                          <span className="font-gilroyBold font-normal text-white text-xl ">
                            July 2016
                          </span>
                          <p className="font-ttCommonProNormal text-white">
                            EnRoute launches and enables FIFO transportation
                            coordinators to book and manage charter air, ground
                            transportation and marine vessels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                 
                 {currNum ===1 ?
                    <div 
                    onClick={()=>setCurrNum(currNum+1)}
                    className='font-gilroyBold text-white w-full text-center underline'>
                    Load More
                    </div>
                    :
                    <>
                    <div className=" max-w-[580px] h-[455px]">
                      <div className="flex flex-col">
                        <h2 className="text-h2 text-custom-button font-gilroyBold">
                          2015
                        </h2>
                        <div className="relative">
                          <div className="absolute inset-0 bg-cover bg-history-7 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                          <div className="max-w-[529px] h-[400px]">
                            <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                              <span className="font-gilroyBold font-normal text-white text-xl ">
                                February 2015
                              </span>
                              <p className="font-ttCommonProNormal text-white">
                                Mobile Housekeeping launches, enabling cleaners to
                                update room status from a mobile device as they
                                complete walkdowns or cleanings.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>              
                    <div className=" max-w-[580px] h-[455px]">
                      <div className="flex flex-col">
                        <h2 className="text-h2 text-custom-button font-gilroyBold">
                          2013
                        </h2>
                        <div className="relative">
                          <div className="absolute inset-0 bg-cover bg-history-8 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                          <div className="max-w-[529px] h-[400px]">
                            <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                              <span className="font-gilroyBold font-normal text-white text-xl ">
                                June 2013
                              </span>
                              <p className="font-ttCommonProNormal text-white">
                                Construction firm implements SmartLodge at their
                                remote camps at a hydroelectric dam construction
                                project in Manitoba, Canada.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>              
                    <div className=" max-w-[580px] h-[455px]">
                      <div className="flex flex-col">
                        <h2 className="text-h2 text-custom-button font-gilroyBold">
                          2007
                        </h2>
                        <div className="relative">
                          <div className="absolute inset-0 bg-cover bg-history-9 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                          <div className="max-w-[529px] h-[400px]">
                            <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                              <span className="font-gilroyBold font-normal text-white text-xl ">
                                March 2007
                              </span>
                              <p className="font-ttCommonProNormal text-white">
                                The company installs the first version of SmartLodge
                                at a remote camp serving the Canadian oil sands in
                                Fort McMurray, Alberta, Canada.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div className=" max-w-[580px] h-[455px]">
                      <div className="flex flex-col">
                        <h2 className="text-h2 text-custom-button font-gilroyBold">
                          1997
                        </h2>
                        <div className="relative">
                          <div className="absolute inset-0 bg-cover bg-history-10 max-w-[529px] h-[400px] bottom-0 rounded-2xl border-[#5BC0EC] border-[1px]"></div>
                          <div className="max-w-[529px] h-[400px]">
                            <div className="relative flex flex-col p-6 justify-end gap-4 w-full h-full">
                              <span className="font-gilroyBold font-normal text-white text-xl ">
                                June 1997
                              </span>
                              <p className="font-ttCommonProNormal text-white">
                                Camps & Crew’s parent company, Innfinity Software
                                Systems, releases a now-retired version of
                                SmartLodge for hotels properties.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                    </>
                    
                    }
                    </>
                 }
                            
                            
                    </div>
  )
}

export default HistoryCards
