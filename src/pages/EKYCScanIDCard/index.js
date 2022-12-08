import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  SelectBox,
  Img,
  Stack,
  Button,
} from "components";
import Sidebar2 from "components/Sidebar/Sidebar2";
import Header from "components/Header/Header";

const EKYCScanIDCardPage = () => {
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
              <Column className="bg-white_A700 flex flex-col items-center justify-start mb-[1px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="flex flex-col items-center justify-end md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[28%]">
                  <Text
                    className="mt-[1px] text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Scan ID Card
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[87%]"
                    as="h6"
                    variant="h6"
                  >
                    Please ensure that the image that you uploaded is clear and
                    not blurred
                  </Text>
                </Column>
                <SelectBox
                  className="font-medium sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] text-[16px] text-bluegray_800 sm:w-[100%] w-[31%]"
                  placeholderClassName="text-bluegray_800"
                  name="group One"
                  placeholder="Select type of Card"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_20X20.svg"
                      className="w-[11px] mr-[24px] sm:mr-[12px] sm:w-[5px] md:mr-[16px] md:w-[7px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  variant="OutlineIndigo51_1"
                ></SelectBox>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
                  <Stack className="h-[359px] relative sm:w-[100%] w-[50%]">
                    <Text
                      className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_800 top-[10%] w-[max-content]"
                      as="h5"
                      variant="h5"
                    >
                      Front
                    </Text>
                    <Column className="absolute border-2 border-dashed border-indigo_51 flex flex-col items-center justify-end p-[108px] md:p-[74px] sm:px-[15px] sm:py-[57px] rounded-radius4 w-[100%]">
                      <Button
                        className="flex sm:h-[30px] md:h-[39px] h-[56px] items-center justify-center sm:mt-[10px] md:mt-[13px] mt-[19px] rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                        size="2xlIcn"
                        variant="icbFillRed55"
                      >
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="plus"
                        />
                      </Button>
                      <Text
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[31%]"
                        as="h6"
                        variant="h6"
                      >
                        Drag or click to upload image
                      </Text>
                    </Column>
                  </Stack>
                  <Stack className="h-[359px] sm:ml-[10px] md:ml-[13px] ml-[20px] relative sm:w-[100%] w-[50%]">
                    <Column className="absolute bottom-[30%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] md:px-[15px] sm:px-[15px] px-[23px] sm:w-[100%] w-[28%]">
                      <Button
                        className="flex sm:h-[30px] md:h-[39px] h-[56px] items-center justify-center rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                        size="2xlIcn"
                        variant="icbFillRed55"
                      >
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="plus One"
                        />
                      </Button>
                      <Text
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[98%]"
                        as="h6"
                        variant="h6"
                      >
                        Drag or click to upload image
                      </Text>
                    </Column>
                    <Column className="absolute border-2 border-dashed border-indigo_51 flex flex-col items-center justify-start md:p-[24px] p-[36px] sm:px-[15px] sm:py-[19px] rounded-radius4 w-[100%]">
                      <Text
                        className="font-normal sm:mb-[143px] md:mb-[185px] mb-[270px] not-italic text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Back
                      </Text>
                    </Column>
                  </Stack>
                </Row>
                <Button
                  className="cursor-pointer font-bold md:mb-[11px] mb-[16px] sm:mb-[8px] min-w-[25%] sm:mt-[30px] md:mt-[39px] mt-[58px] text-[14px] text-center w-[max-content]"
                  shape="CircleBorder24"
                  size="lg"
                  variant="FillDeeporange300"
                >
                  Next Step
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCScanIDCardPage;
