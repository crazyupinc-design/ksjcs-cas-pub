import type { NextPage } from "next";
import Header from "../components/Header";
import SubBanner from "../components/sub-banner";
import Footer from "../components/Footer";

const TestSubMypage: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-center text-[2.25rem] text-black font-headings-headling-2">
      <Header />
      <SubBanner
        title="마이페이지"
        desc="Cybercommunication Academic Society"
        bgImage="url('/subbanner-mypage@3x.png')"
      />
      <div className="self-stretch bg-bg-colors-white h-[31.25rem] flex flex-row items-center justify-center p-[0.625rem] box-border">
        <b className="relative leading-[2.5rem]">TODO: 마이페이지 Contents</b>
      </div>
      <Footer />
    </div>
  );
};

export default TestSubMypage;