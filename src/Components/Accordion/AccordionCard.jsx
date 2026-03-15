import React from "react";

function AccordionCard({ id, title, body, isOpen, setIsOpen }) {
    return (
        <>
            <div className='border w-1/2 mx-auto'>
                <div className='w-full text-2xl font-bold py-2 bg-gray-600 px-4 flex justify-between cursor-pointer'
                    onClick={() => setIsOpen()}
                >
                    <span>{title}</span>
                    <span style={isOpen === id ? { transform: "rotate(180deg)" } : {}}>
                        ^
                    </span>

                </div>
                <div className='px-4 text-lg'>{isOpen === id ? body : ""}</div>
            </div>
        </>
    );
}

export default AccordionCard;
