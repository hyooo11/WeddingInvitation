"use client";
import { ReactNode, useState } from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";
import data from "@/data.json";
import Link from "next/link";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Account = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div>
      <Accordion>
        {data.hostInfo.map((data, index) => {
          return (
            <AccordionItem title={`${data.host} 계좌번호`}>
              <div>
                {data.accountInfo.map((data, index) => {
                  return (
                    <>
                      <div>
                        <span>{data.relation}</span>
                        <span>{data.name}</span>
                      </div>
                      <div>
                        <span>{data.bank}</span>
                        <span>{data.account}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
      <p>
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
      </Accordion>
    </div>
  );
};
export default Account;
