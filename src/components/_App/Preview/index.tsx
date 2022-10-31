import { useDeviceSizeSelector } from "hooks";
import React from "react";

function Preview({ children }: { children: React.ReactNode }) {
  const { deviceSize } = useDeviceSizeSelector();
  return <div className={`w-max h-max border-[1.8px] border-secondary border-dashed relative top-28 p-2 [&>div]:box-content ${deviceSize} flex justify-center`}>{children}</div>;
}

export default Preview;