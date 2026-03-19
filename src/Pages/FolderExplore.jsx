import { useState } from "react";
import json from "../index.json";
import FolderList from "../Components/FolderExplore/FolderList";

function FolderExplore() {
  const [data, setData] = useState(json);

  const addNewFolder = (parentId) => {
    const isFolder = Number(
      prompt("if you wont to create folder press 1 or for file press 0"),
    );

    const name = prompt("Enter the name");
    if (!name) {
      return;
    }
    const handelList = (allList) => {
      return allList.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: isFolder === 1 ? true : false,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: handelList(node.children) };
        }
        return node;
      });
    };
    setData((prev) => handelList(prev));
  };

  const removeFolder = (parentId) => {
    const handelList = (allList) => {
      return allList
        .filter((node) => node.id !== parentId && node)
        .map((node) => {
          if (node.children) {
            return { ...node, children: handelList(node.children) };
          }
          return node;
        });
    };
    setData((prev) => handelList(prev));
  };
  return (
    <>
      <div className='h-175'>
        <FolderList
          data={data}
          addNewFolder={addNewFolder}
          removeFolder={removeFolder}
        />
      </div>
    </>
  );
}

export default FolderExplore;
