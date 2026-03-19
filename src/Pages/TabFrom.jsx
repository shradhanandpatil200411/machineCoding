import Profile from "../Components/TabFrom/Profile";
import Interest from "../Components/TabFrom/Interest";
import Settings from "../Components/TabFrom/Settings";
import { useState } from "react";

function TabFrom() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Shradhanand",
    age: 25,
    email: "shradhanand@gmail.com",
    interest: ["react", "javaScript"],
    theme: "dark",
  });

  const [error, setError] = useState({});

  const Tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Enter the valid name";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age must be 18 or above";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Enter the valid Email";
        }
        setError(err);

        return err.age || err.name || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest.length === 0) {
          err.interest = "select minimum one interest";
        }
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTab = Tabs[activeTab].component;

  const handelClickNext = () => {
    Tabs[activeTab].validate() && setActiveTab(activeTab + 1);
  };

  const handelClickPervious = () => {
    Tabs[activeTab].validate() && setActiveTab(activeTab - 1);
  };

  const handelClickSubmit = () => {
    console.log(data);
  };

  return (
    <div className='p-10'>
      <div className='flex gap-10 '>
        {Tabs.map((t, i) => {
          return (
            <div
              onClick={() => {
                console.log(Tabs[activeTab].validate());
                Tabs[activeTab].validate() && setActiveTab(i);
              }}
              className='border rounded-2xl hover:bg-sky-700 cursor-pointer px-4 py-2 font-semibold'
              key={i}>
              {t.name}
            </div>
          );
        })}
      </div>
      <div className='h-96 border mt-5'>
        <ActiveTab data={data} setData={setData} error={error} />
        <div className='flex gap-10 w-fit mx-auto mt-10'>
          {activeTab > 0 && (
            <button
              onClick={handelClickPervious}
              className='px-4 bg-gray-600 py-2 hover:bg-gray-500  rounded-xl font-semibold cursor-pointer'>
              Pervious
            </button>
          )}
          {Tabs.length - 1 > activeTab && (
            <button
              onClick={handelClickNext}
              className='px-4 bg-gray-600 py-2 hover:bg-gray-500  rounded-xl font-semibold cursor-pointer'>
              Next
            </button>
          )}
          {Tabs.length - 1 === activeTab && (
            <button
              onClick={handelClickSubmit}
              className='px-4 bg-gray-600 py-2 hover:bg-gray-500  rounded-xl font-semibold cursor-pointer'>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabFrom;
