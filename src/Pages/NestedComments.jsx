import { useEffect, useState } from "react";
import CommentsBox from "../Components/NestedComments/CommentsBox";

function NestedComments() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await new Promise((resolve) => {
      const data = [
        {
          profilerUrl: "https://avatars.githubusercontent.com/u/174130151?v=4",
          userName: "vicky_patil",
          comment: "Hii my name is vicky",
          replies: [
            {
              profilerUrl:
                "https://avatars.githubusercontent.com/u/174130151?v=4",
              userName: "vicky_patil",
              comment: "Hii my name is vicky",
              replies: [
                {
                  profilerUrl:
                    "https://avatars.githubusercontent.com/u/174130151?v=4",
                  userName: "vicky_patil",
                  comment: "Hii my name is vicky",
                },
              ],
            },
          ],
        },
        {
          profilerUrl: "https://avatars.githubusercontent.com/u/174130151?v=4",
          userName: "vicky_patil",
          comment: "Hii my name is vicky",
          replies: [
            {
              profilerUrl:
                "https://avatars.githubusercontent.com/u/174130151?v=4",
              userName: "vicky_patil",
              comment: "Hii my name is vicky",
              replies: [
                {
                  profilerUrl:
                    "https://avatars.githubusercontent.com/u/174130151?v=4",
                  userName: "vicky_patil",
                  comment: "Hii my name is vicky",
                },
              ],
            },
          ],
        },
        {
          profilerUrl: "https://avatars.githubusercontent.com/u/174130151?v=4",
          userName: "vicky_patil",
          comment: "Hii my name is vicky",
          replies: [
            {
              profilerUrl:
                "https://avatars.githubusercontent.com/u/174130151?v=4",
              userName: "vicky_patil",
              comment: "Hii my name is vicky",
              replies: [
                {
                  profilerUrl:
                    "https://avatars.githubusercontent.com/u/174130151?v=4",
                  userName: "vicky_patil",
                  comment: "Hii my name is vicky",
                },
              ],
            },
          ],
        },
        {
          profilerUrl: "https://avatars.githubusercontent.com/u/174130151?v=4",
          userName: "vicky_patil",
          comment: "Hii my name is vicky",
          replies: [
            {
              profilerUrl:
                "https://avatars.githubusercontent.com/u/174130151?v=4",
              userName: "vicky_patil",
              comment: "Hii my name is vicky",
            },
          ],
        },
        {
          profilerUrl: "https://avatars.githubusercontent.com/u/174130151?v=4",
          userName: "vicky_patil",
          comment: "Hii my name is vicky",
        },
      ];
      resolve(data);
    });
    setData(response);
  };

  useEffect(() => {
    const fetchAsyncData = async () => {
      await fetchData();
    };
    fetchAsyncData();
  }, []);

  return (
    <>
      <div className='mt-20 ml-5 '>
        <CommentsBox data={data} />
      </div>
    </>
  );
}

export default NestedComments;
