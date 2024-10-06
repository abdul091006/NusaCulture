import { getIsIndo } from "@/utils/data";

const BudayaNotFound = () => {
  const lang = getIsIndo();
  return (
    <div>
      <p className="font-semibold text-[#D12B2B] text-[24px] mt-[-30px]">
        {lang ? "Budaya Tidak Ditemukan" : "Culture Not Found"}
      </p>
      <p className="font-light text-white/70 mt-[15px]">
        {lang
          ? "Kami tidak dapat menemukan budaya yang Anda cari"
          : "We couldn’t find the culture you were looking for"}
      </p>
    </div>
  );
};

export default BudayaNotFound;
