import { LuCirclePlus  } from "react-icons/lu";

function Header() {
  return (
    <header className="flex flex-col w-full" >
      <div className="flex flex-row items-center justify-between w-[1010px] mx-auto text-[15px] px-[20px] h-[40px] text-[#8d94ad] headertop ">
        <div className="flex flex-row gap-[25px] cursor-pointer  headertopleft">
          <span className="hover:text-[rgb(202,16,22)]">Tap.az</span>
          <span className="hover:text-[rgb(202,16,22)]">Bina.az</span>
          <span className="hover:text-[rgb(202,16,22)]">Boss.az</span>
        </div>
        <div className="flex flex-row gap-[25px] cursor-pointer headertopright">
          <span className="text-black"><span className="text-black cursor-default">Dəstək: </span><span className=" cursor-pointer hover:text-[rgb(202,16,22)]">(012) 526-47-47</span></span>
          <span className="hover:text-[rgb(202,16,22)]">Yardım</span>
          <span className="hover:text-[rgb(202,16,22)]">RU</span>
          <span className="hover:text-[rgb(202,16,22)] flex items-center gap-[7px]"><i className="fa-solid fa-heart text-lg"></i> Seçilmişlər</span>
          <span className="hover:text-[rgb(202,16,22)] flex items-center gap-[7px]"><i className="fa-solid fa-circle-user text-xl"></i>Giriş</span>
        </div>

      </div>
      <div className="bg-[rgb(202,16,22)] w-full headercenter" >
        <div className="flex flex-row justify-between items-center px-[20px] w-[1010px] bg-[rgb(202,16,22)] h-[60px] mx-auto  headercentercontent relative">
          <div className="flex flex-row gap-[35px] headercenterleft">
            <a href="/index.html" className="text-white font-bold text-[18px] cursor-pointer headercenterleftlogo">
              TURBO.AZ
            </a>
            <div className="flex flex-row items-center text-white gap-[18px] text-[15px] headercenterleftright">
              <span className="cursor-pointer hover:text-[rgb(245,206,205)]">Bütün elanlar</span>
              <span className="cursor-pointer hover:text-[rgb(245,206,205)]">Dilerlər</span>
              <span className="cursor-pointer hover:text-[rgb(245,206,205)]">Avtokataloq</span>
              <span className="cursor-pointer hover:text-[rgb(245,206,205)]">Moto</span>
              <span className="cursor-pointer hover:text-[rgb(245,206,205)]">Ehtiyat hissələr və aksesuarlar</span>
              <span className="cursor-pointer hover:text-[rgb(245,206,205)]">İcarə</span>
            </div>
          </div>
          <div className="headercenterright">
            <button className="flex items-center justify-center gap-[7px]  rounded-[7px] flex-row w-[103.17px] h-[40px] bg-[rgb(126,211,33)] hover:bg-[rgb(133,192,31)] cursor-pointer">
              <LuCirclePlus  className="w-[15px] h-[15px] text-[#fff] text[500] text-[15px]" />
              <span className="text-white font-medium text-[15px]">Yeni elan</span>
            </button>
          </div>
          <div id="chosencars" className="flex flex-col absolute right-0 w-[510px] max-h-0 gap-[20px] overflow-y-scroll top-0 border-[rgb(202,16,22)] border-[1px]  z-1000 p-[10px]" >
            <div>
              <h2 className="text-[31px] mt-[16px]  text-center rounded-[7px] text-white bg-[rgb(202,16,22)]">Seçilmişlər</h2>
            </div>
            <div id="likedDiv" className="flex flex-col gap-[10px]">
            </div>
            <div id="kassa" className="flex flex-row bg-[rgb(202,16,22)] gap-[15px] text-[16px] text-white p-[5px] rounded-[7px]">
              <div>
                <p id="mehsulsayi"></p>
                <p id="umimiqiymet"></p>
                <p id="endirimliqiymet"></p>
              </div>
              <div id="endirim"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="filter" className="headerbottom w-full bg-[#ebedf3]">
        <div className="flex flex-col w-[1010px] mx-auto h-[219px] px-[20px] justify-center gap-[15px] bg-[rgb(235,237,243)]">
          <div className="flex flex-row items-center gap-[10px]  ">
            <div className="flex flex-col gap-[10px] ">
              <div className="flex flex-col dropdown">
                <div className="flex items-center justify-between h-[48px] w-[235px] bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer relative">
                  <div id="markayaz" className="text-[#8d94ad] mt-[2.5px]">Marka</div>
                  <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="dropdowncontent flex-col bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out overflow-y-auto rounded-[7px] py-[9px] w-[235px] shadow-lg cursor-pointer z-10">
                  <div className="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)] flex items-center gap-[8px]"><i className="fa-solid fa-x text-[red] text-[14px]"></i><span className="text-[#212c3a]">Sıfırla</span></div>
                </div>
              </div>
              <div className="flex flex-row">
                <input type="number" className="h-[46px] w-[118px] outline-[grey] bg-white text-[15px] rounded-tl-[7px] border-r-0 rounded-bl-[7px] border-[1px] p-[8px] border-gray-300 placeholder-[#8d94ad]" placeholder="Qiymət, min." />
                <input type="number" className="h-[46px] w-[117px] outline-[grey] bg-white text-[15px] rounded-tr-[7px] rounded-br-[7px]  border-[1px] p-[8px] border-gray-300 placeholder-[#8d94ad]" placeholder="maks." />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col dropdown3">
                  <div className="flex items-center justify-between h-[48px] w-[235px] bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer relative">
                    <div id="modeliyaz" className="text-[#8d94ad] mt-[2.5px]">Model</div>
                    <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  <div className="dropdowncontent3 flex-col bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out overflow-y-auto rounded-[7px] py-[9px] w-[235px] z-10 shadow-lg cursor-pointer ">
                    <div className="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)] flex items-center gap-[8px]"><i className="fa-solid fa-x text-[red] text-[14px]"></i><span className="text-[#212c3a]">Sıfırla</span></div>
                  </div>
                </div>
                <div className="flex flex-row gap-[15px]">
                  <div className="flex flex-col dropdown5">
                    <div className="flex items-center justify-between  h-[48px] w-[82px] bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer relative">
                      <div className="text-[#8d94ad] mt-[2.5px]">AZN</div>
                      <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <div className="dropdowncontent5 flex-col bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out  rounded-[7px] py-[9px]  w-[82px] shadow-lg cursor-pointer">
                    </div>
                  </div>
                  <button className="h-[48px] w-[60px] outline-none bg-white text-[15px]  rounded-[7px]  border-[1px] pt-[1px] border-gray-300 hover:border-[grey] cursor-pointer"> Kredit</button>
                  <button className="h-[48px] w-[60px] outline-none bg-white text-[15px]  rounded-[7px]  border-[1px] pt-[1px] border-gray-300 hover:border-[grey] cursor-pointer"> Barter</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row">
                  <button type="number" className="h-[47px] w-[67px] bg-[rgb(202,16,22)] text-white text-[15px] rounded-tl-[7px] rounded-bl-[7px] pt-[1px] border-gray-300 cursor-pointer" >Hamısı</button>
                  <button type="number" className="h-[47px] w-[66px] bg-white text-[15px] text-[#8d94ad]  border-[1px] border-r-0 border-gray-300 pt-[1px] cursor-pointer">Yeni</button>
                  <button type="number" className="h-[47px] w-[102px]  bg-white text-[15px] text-[#8d94ad] rounded-tr-[7px] rounded-br-[7px] pt-[1px] border-[1px]  border-gray-300 cursor-pointer">Sürülmüş</button>
                </div>
                <div className="flex flex-row gap-[15px]">
                  <div className="flex flex-col dropdown4">
                    <div className="flex items-center justify-between h-[48px] w-[235px] bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer relative">
                      <div id="bannovuyaz" className="text-[#8d94ad] mt-[2.5px]">Ban növü</div>
                      <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <div className="dropdowncontent4 flex-col bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out overflow-y-auto rounded-[7px] py-[9px] w-[235px] shadow-lg cursor-pointer z-100">
                      <div className="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)] flex items-center gap-[8px]"><i className="fa-solid fa-x text-[red] text-[14px]"></i><span className="text-[#212c3a]">Sıfırla</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-row gap-[15px]">
                  <div className="flex flex-col dropdown2">
                    <div className="flex items-center justify-between h-[48px] w-[235px] bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer relative">
                      <div id="sheheryaz" className="text-[#8d94ad] mt-[2.5px]">Şəhər</div>
                      <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <div className="dropdowncontent2 flex-col bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out overflow-y-auto rounded-[7px] py-[9px] w-[235px] z-10 shadow-lg cursor-pointer">
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col dropdown6">
                    <div className="flex items-center justify-between h-[48px] w-[118px] bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer  relative">
                      <div className="text-[#8d94ad] mt-[2.5px]">İl, min.</div>
                      <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <div className="dropdowncontent6 flex-col bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out overflow-y-auto rounded-[7px] py-[9px] w-[118px] z-100 shadow-lg cursor-pointer">
                      <div className="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)] flex items-center gap-[8px]"><i className="fa-solid fa-x text-[red] text-[14px]"></i><span className="text-[#212c3a]">Sıfırla</span></div>
                    </div>
                  </div>
                  <div className="flex flex-col dropdown7">
                    <div className="flex items-center justify-between h-[48px] w-[118px]  bg-white text-[15px] border-[1px] border-gray-300 rounded-[7px] p-[8px] cursor-pointer relative">
                      <div className="text-[#8d94ad] mt-[2.5px]">maks.</div>
                      <svg className="ml-2 w-6 h-6 text-[#8d94ad] transition-all duration-300" id="rot7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    <div className="dropdowncontent7 flex-col z-100 bg-white text-[15px] max-h-0 opacity-0 transition-all duration-300 ease-out overflow-y-auto rounded-[7px] py-[9px] w-[118px] shadow-lg cursor-pointer">
                      <div className="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)] flex items-center gap-[8px]"><i className="fa-solid fa-x text-[red] text-[14px]"></i><span className="text-[#212c3a]">Sıfırla</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className=" flex flex-row items-center gap-[5px]">
              <span className="text-[15px]">Bu gün:</span>
              <span className="text-[#4c88f9] text-[15px] cursor-pointer">69 yeni elan</span>
            </div>
            <div className="flex flex-row items-center justify-between gap-[35px]">
              <span className="text-[15px] text-[rgb(141,148,173)] cursor-pointer">Sıfırla</span>
              <span>
                <div className="flex flex-row items-center gap-[5px] cursor-pointer">
                  <span className="text-[15px] text-[rgb(202,16,22)]">Daha çox filtr</span>
                  <svg className="w-6 h-6 text-[rgb(202,16,22)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </span>
              <button className="w-[176.72px] h-[48px] bg-[rgb(202,16,22)] text-white rounded-[7px] cursor-pointer hover:bg-[rgb(184,13,19)]">Elanları göstər</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
