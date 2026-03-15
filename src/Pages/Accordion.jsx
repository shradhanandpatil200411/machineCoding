import React, { useEffect, useState } from "react";
import AccordionCard from "../Components/Accordion/AccordionCard";

function Accordion() {
  const [accordionData, setAccordionData] = useState([]);
  const [isOpen, setIsOpen] = useState(0);

  const fetchData = async () => {
    const data = await new Promise((resolve) =>
      resolve([
        {
          title: "According title #1",
          id: 1,
          body: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.",
        },
        {
          title: "According title #2",
          id: 2,
          body: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.",
        },
        {
          title: "According title #3",
          id: 3,
          body: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body.",
        },
      ]),
    );

    setAccordionData(data);
  };

  useEffect(() => {
    const fetchAsyncData = async () => {
      await fetchData();
    };
    fetchAsyncData();
  }, []);

  return (
    <>
      <div className='mt-20 h-screen'>
        {accordionData.map((item) => {
          return (
            <AccordionCard
              key={item.id}
              id={item.id}
              title={item?.title}
              body={item?.body}
              isOpen={isOpen}
              setIsOpen={() =>
                isOpen === item.id ? setIsOpen(null) : setIsOpen(item.id)
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default Accordion;
