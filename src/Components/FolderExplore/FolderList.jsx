import { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function FolderList({ data, addNewFolder, removeFolder }) {
  const [isFolderOpen, setIsFolderOpen] = useState({});

  return (
    <>
      {data.map((f) => {
        return (
          <div className='pl-5 border-l' key={f.id}>
            <div className='flex items-center gap-2'>
              {f.isFolder && (
                <div
                  onClick={() => {
                    setIsFolderOpen((prev) => ({
                      ...prev,
                      [f.name]: !prev[f.name],
                    }));
                  }}
                  className='cursor-pointer'>
                  {isFolderOpen[f.name] ?
                    <FaFolderOpen />
                  : <FaFolder />}
                </div>
              )}
              <div>
                <h1 className='text-lg '>{f.name}</h1>
              </div>
              <div className='flex cursor-pointer'>
                {f.isFolder && (
                  <div
                    onClick={() => {
                      setIsFolderOpen((prev) => ({
                        ...prev,
                        [f.name]: true,
                      }));
                      addNewFolder(f.id);
                    }}>
                    <MdCreateNewFolder className='text-green-500' />
                  </div>
                )}
                <div onClick={() => removeFolder(f.id)}>
                  <MdDelete className='text-red-400' />
                </div>
              </div>
            </div>
            {f.children && isFolderOpen[f.name] && (
              <FolderList
                data={f.children}
                addNewFolder={addNewFolder}
                removeFolder={removeFolder}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default FolderList;
