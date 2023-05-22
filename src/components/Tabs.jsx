import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="flex border-b border-gray-300">
        <button
          className={`py-2 px-4 ${
            activeTab === 1 ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 2 ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 3 ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 4 ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleTabClick(4)}
        >
          Tab 4
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 5 ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleTabClick(5)}
        >
          Tab 5
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 6 ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => handleTabClick(6)}
        >
          Tab 6
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
        {activeTab === 4 && <div>Content for Tab 4</div>}
        {activeTab === 5 && <div>Content for Tab 5</div>}
        {activeTab === 6 && <div>Content for Tab 6</div>}
      </div>
    </div>
  );
};

export default Tabs;
