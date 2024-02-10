import React, { useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';

import { Button, Img, ReactTable, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import { useNavigate } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const UploadedPage = () => {
  const handleTagSelection = (row, selectedTag) => {
    // Get the current data from the row
    const rowData = row.original;
  
    // Update the 'datatypeThree' property with the selected tag
    rowData.datatypeThree = selectedTag;
  
    // Replace the updated row data in the table data array
    tableData.current[row.index] = rowData;
  
    // Log the updated data
    console.log(`Selected tag "${selectedTag}" for row ${row.index}:`, rowData);
  };
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userinfo');
    navigate("/"); 
};
  const tableData = React.useRef([
    {
      datatype: "01",
      datatypeOne: "www.google.com",
      datatypeTwo: "prefixsample",
      datatypeThree: "Select Tags",
      datatypeFour: "TAG 4",
    },
    {
      datatype: "02",
      datatypeOne: "www.google.com",
      datatypeTwo: "prefixsample",
      datatypeThree: "Select Tags",
      datatypeFour: "TAG 2",
    },
    {
      datatype: "03",
      datatypeOne: "www.google.com",
      datatypeTwo: "prefixsample",
      datatypeThree: "Select Tags",
      datatypeFour: "TAG 4",
    },
    {
      datatype: "05",
      datatypeOne: "www.google.com",
      datatypeTwo: "prefixsample",
      datatypeThree: "Select Tags",
      datatypeFour: "TAG 3",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("datatype", {
        cell: (info) => (
          <Text
            className="pb-[29px] pl-4 pt-[34px] text-gray-900 text-sm"
            size="txtFigtreeRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[125px] pl-[15px] pt-[17px] text-gray-900 text-sm"
            size="txtFigtreeSemiBold14Gray900"
          >
            Sl No.
          </Text>
        ),
      }),
      tableColumnHelper.accessor("datatypeOne", {
        cell: (info) => (
          <Text
            className="pb-[26px] pt-[35px] text-blue-A200_01 text-sm underline"
            size="txtFigtreeRegular14BlueA20001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[212px] pt-[17px] text-gray-900 text-sm"
            size="txtFigtreeSemiBold14Gray900"
          >
            Links
          </Text>
        ),
      }),
      tableColumnHelper.accessor("datatypeTwo", {
        cell: (info) => (
          <Text
            className="pb-[27px] pt-[35px] text-gray-900 text-sm"
            size="txtFigtreeRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[177px] pl-[5px] pt-[17px] text-gray-900 text-sm"
            size="txtFigtreeSemiBold14Gray900"
          >
            Prefix
          </Text>
        ),
      }),
      tableColumnHelper.accessor("Add Tags", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-[21px] py-[21px]">
            {/* Menu for each "Select Tags" button */}
            <Menu menuButton={<MenuButton className=' bg-white-A700 rounded-lg px-2 py-4'>Select Tags ↓</MenuButton>}>
              <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]' onClick={() => handleTagSelection(info.row, 'Tag1')}>Tag1</MenuItem>
              <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]' onClick={() => handleTagSelection(info.row, 'Tag2')}>Tag2</MenuItem>
              <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]' onClick={() => handleTagSelection(info.row, 'Tag3')}>Tag3</MenuItem>
              <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]' onClick={() => handleTagSelection(info.row, 'Tag4')}>Tag4</MenuItem>
              <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]' onClick={() => handleTagSelection(info.row, 'Tag5')}>Tag5</MenuItem>
            </Menu>
          </div>
        ), 
      }), 
      tableColumnHelper.accessor("datatypeFour", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-start justify-start p-0.5">
            <Button
              className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[60px] mt-[29px]"
              rightIcon={
                <Img
                  className="h-4 ml-1"
                  src="images/img_close.svg"
                  alt="close"
                />
              }
              shape="round"
            >
              <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                TAG 1
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[62px] mt-[29px]"
              rightIcon={
                <Img
                  className="h-4 ml-1"
                  src="images/img_close.svg"
                  alt="close"
                />
              }
              shape="round"
            >
              <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                TAG 2
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[62px] mt-[29px]"
              rightIcon={
                <Img
                  className="h-4 ml-1"
                  src="images/img_close.svg"
                  alt="close"
                />
              }
              shape="round"
            >
              <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                TAG 3
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center mb-[23px] min-w-[62px] mt-[29px]"
              rightIcon={
                <Img
                  className="h-4 ml-1"
                  src="images/img_close.svg"
                  alt="close"
                />
              }
              shape="round"
            >
              <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                {info?.getValue()}
              </div>
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[301px] pt-[19px] text-gray-900 text-sm"
            size="txtFigtreeSemiBold14Gray900"
          >
            Selected Tags
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-nunito items-center justify-start mx-auto pb-[30px] sm:pr-5 pr-[30px] w-full">
        <div className="flex md:flex-col flex-row gap-[30px] ml-0 items-start justify-between max-w-[1410px] mb-[133px] mx-auto md:px-5 w-full">
        <Sidebar1 className="!sticky !w-[218px] bg-white-A700_01 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex md:flex-1 flex-col font-figtree md:gap-10 gap-[104px] items-end justify-start md:mt-0 mt-[49px] w-[83%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[137px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-center w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start max-w-[1052px] w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                        size="txtFigtreeSemiBold24"
                      >
                        Upload CSV
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-[27px] items-center justify-between md:mt-0 mt-0.5 w-[15%] md:w-full">
                <button onClick={handleLogout} className=" bg-blue-600 py-3 px-2 rounded text-white-A700_01">
                logout
              </button>
                  <Img
                    className="h-[23px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700_01 flex flex-col gap-[21px] items-center justify-start p-4 rounded-lg w-[52%] md:w-full">
                <div className="border border-dashed border-gray-200_01 flex flex-col items-center justify-end p-[84px] md:px-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start mt-3.5 w-[68%] md:w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-auto">
                      <Img
                        className="h-9 w-9"
                        src="images/img_television_36x36.svg"
                        alt="television_One"
                      />
                      <Text
                        className="text-base text-center text-gray-500_01 w-auto"
                        size="txtFigtreeRegular16"
                      >
                        <span className="text-gray-500_01 font-figtree font-normal">
                          Drop your excel sheet here or{" "}
                        </span>
                        <span className="text-indigo-A200 font-figtree font-normal">
                          browse
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-A200_7e flex flex-row gap-2 h-14 md:h-auto items-center justify-center pl-2 pr-4 py-2 rounded-lg w-[564px] sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <Text
                    className="text-sm text-white-A700_01 w-auto"
                    size="txtFigtreeSemiBold14"
                  >
                    Upload
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[46px] items-start justify-start w-[92%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtFigtreeSemiBold24"
                >
                  Uploads
                </Text>
              </div>
              <div className="h-[455px] sm:h-[551px] md:h-[786px] relative w-full">
                <div className="absolute bg-gray-100 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[15px] px-[15px] rounded-lg top-[0] w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                  
                  {/* <div className="flex flex-col items-center justify-start mb-[73px] w-full">
                    <div className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[13px] rounded-lg w-full">
                
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-6">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtFigtreeRegular14Gray900"
                        >
                          04
                        </Text>
                      </div>
                      <Text
                        className="text-blue-A200_01 text-sm underline"
                        size="txtFigtreeRegular14BlueA20001"
                      >
                        www.google.com
                      </Text>
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtFigtreeRegular14Gray900"
                      >
                        prefixsample
                      </Text>
                      <div className="bg-white-A700_01 border border-gray-100_01 border-solid flex flex-row gap-2 h-8 md:h-auto items-center justify-center p-3 rounded-lg w-[200px]">
                      <Menu  menuButton={<MenuButton>Select Tags</MenuButton>}>
                        <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]'>Tag1</MenuItem>
                        <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]'>Tag2</MenuItem>
                        <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]'>Tag3</MenuItem>
                        <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]'>Tag4</MenuItem>
                        <MenuItem className='bg-white-A700_01 py-2 px-4 w-[150px]'>Tag5</MenuItem>
                      </Menu>
                        <Img
                          className="h-6 rounded-lg w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      
                      <div className="flex flex-col items-start justify-start mr-4 w-[270px]">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[60px]"
                          rightIcon={
                            <Img
                              className="h-4 ml-1"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          }
                          shape="round"
                        >
                          <div className="font-semibold text-[10px] text-center tracking-[0.50px] uppercase">
                            TAG 1
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div> */}
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadedPage;
