import React from "react";

import { Column, Row, Line, Text, Img, Button } from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCSignaturePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar2 className="w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[508px] md:h-[656px] h-[953px] max-w-[1px] mx-[auto] sm:px-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                <Text
                  className="font-poppins mb-[2px] text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  eKYC
                </Text>
                <Text
                  className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_400 text-[16px]">
                    Setting/
                  </span>
                  <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                </Text>
              </Row>
              <Column className="bg-white_A700 flex flex-col items-center justify-start mb-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[33px] p-[48px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="flex flex-col items-center justify-end sm:mx-[0] p-[2px] sm:px-[0] sm:w-[100%] w-[32%]">
                  <Text
                    className="mt-[3px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Singature
                  </Text>
                  <Text
                    className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Make sure that all your information are precise
                  </Text>
                </Column>
                <Column className="bg-gray_51 border-2 border-dashed border-indigo_51 flex flex-col justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_signatureofka.png"
                    className="max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[33px] sm:mr-[25px] md:mr-[32px] mr-[47px] sm:mt-[42px] md:mt-[54px] mt-[79px] sm:w-[100%] w-[88%]"
                    alt="SignatureofKa"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:ml-[333px] ml-[484px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                    <Button
                      className="flex sm:h-[29px] md:h-[38px] h-[54px] items-center justify-center sm:w-[28px] md:w-[37px] w-[54px]"
                      shape="icbCircleBorder28"
                      size="xlIcn"
                      variant="icbOutlineBlack9000c"
                    >
                      <Img
                        src="images/img_edit.svg"
                        className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                        alt="edit"
                      />
                    </Button>
                    <Button
                      className="flex sm:h-[29px] md:h-[38px] h-[54px] items-center justify-center sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[28px] md:w-[37px] w-[54px]"
                      shape="icbCircleBorder28"
                      size="xlIcn"
                      variant="icbOutlineBlack9000c"
                    >
                      <Img
                        src="images/img_refresh.svg"
                        className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                        alt="refresh"
                      />
                    </Button>
                  </Row>
                </Column>
                <Button
                  className="cursor-pointer font-bold min-w-[26%] sm:mt-[26px] md:mt-[34px] mt-[50px] text-[14px] text-center w-[max-content]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Finish process
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCSignaturePage;
