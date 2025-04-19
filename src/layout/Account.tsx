"use client";
import { ReactNode, useState } from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";
import data from "@/data.json";
import Link from "next/link";
import Toast from "@/components/Toast";
import { useToast } from "@/hook/useToast";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Account = () => {
  const { toast, showToast, hideToast } = useToast();
  return (
    <div className="inner Account">
      <Accordion>
        {data.hostInfo.map((data, index) => {

          return (
            <AccordionItem key={index} title={`${data.host} 계좌번호`}>
              <div>
                {data.accountInfo.map((data, index) => {
                  const handleCopy = () => {
                    const cleanAccount = data.account.replace(/-/g, "");
                    navigator.clipboard.writeText(cleanAccount).then(() => {
                      showToast("계좌번호가 복사되었습니다!", "success");
                    }).catch(() => {
                      showToast("계좌번호 복사에 실패했습니다.");
                    });
                  };
                  return (
                    <div key={index} className="item">
                      <div>
                        <span>{data.relation} {data.name}</span>
                      </div>
                      <div className="account_box">
                        <p>
                          <span>{data.bank} | {data.account}</span>
                          <button onClick={handleCopy}>계좌복사하기</button>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
      {/* <p>
        <Link href={`tel:${data.hostInfo[0].accountInfo[0].phone}`}>
          신랑에게 연락하기
        </Link>
      </p>
      <p>
        <Link href={`tel:${data.hostInfo[1].accountInfo[0].phone}`}>
          신부에게 연락하기
        </Link>
      </p>
      <Accordion>
        <AccordionItem title={"혼주에게 연락하기"}>
          <div>신랑측</div>
          <p>
            <Link href={`tel:${data.hostInfo[0].accountInfo[1].phone}`}>
              아버님
            </Link>
          </p>
          <p>
            <Link href={`tel:${data.hostInfo[0].accountInfo[2].phone}`}>
              어머님
            </Link>
          </p>
          <div>신부측</div>
          <p>
            <Link href={`tel:${data.hostInfo[1].accountInfo[1].phone}`}>
              아버님
            </Link>
          </p>
          <p>
            <Link href={`tel:${data.hostInfo[1].accountInfo[2].phone}`}>
              어머님
            </Link>
          </p>
        </AccordionItem>
      </Accordion> */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};
export default Account;
