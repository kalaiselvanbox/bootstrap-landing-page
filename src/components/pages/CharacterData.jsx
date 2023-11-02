import CharacterComp from "../utils/CharacterComp";

function CharacterData() {
  const data = [
    {
      title: "First title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.bLQYxUbcL32mFGpUkU8sfwHaHr&pid=Api&P=0&h=220",
    },
    {
      title: "Second title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.CIeGI03X4xbFK1r7Dr25BAHaI4&pid=Api&P=0&h=220",
    },
    {
      title: "Third title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.mF7Bow-HzwkpqvIJECqPswHaNT&pid=Api&P=0&h=220",
    },
    {
      title: "Four'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.839P1Rsx78PsWHeUC3jxowHaNK&pid=Api&P=0&h=220",
    },
    {
      title: "Five'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.fVzFmcabWGnimDlK24eXtwHaK5&pid=Api&P=0&h=220",
    },
    {
      title: "Six'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.yzry7jcyM9BhYWlS1yUlWgHaKH&pid=Api&P=0&h=220",
    },
    {
      title: "Seven'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Obeyw7BIov_sgL-2Hwl0MQHaJ-&pid=Api&P=0&h=220",
    },
    {
      title: "Eigh'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SRANMy2FrV86gMg7oQ-yFgHaIO&pid=Api&P=0&h=220",
    },
    {
      title: "Nine'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.vS7p4IgWqaCAHwVllyMPrAHaLP&pid=Api&P=0&h=220",
    },
    {
      title: "Ten'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.WpTYEaBnnGYEmqrxnX8HnQHaIJ&pid=Api&P=0&h=220",
    },
    {
      title: "Eleven'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://up.yimg.com/ib/th?id=OIP.kjwMnkRo8W9-4nlymg-KKQHaLg&%3Bpid=Api&w=474&c=1&rs=1&qlt=95",
    },
    {
      title: "Twelve'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://up.yimg.com/ib/th?id=OIP.42RhlGfSsV9xrCQcKaNsDQHaFj&%3Bpid=Api&w=474&c=1&rs=1&qlt=95",
    },
    {
      title: "First title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.bLQYxUbcL32mFGpUkU8sfwHaHr&pid=Api&P=0&h=220",
    },
    {
      title: "Second title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.CIeGI03X4xbFK1r7Dr25BAHaI4&pid=Api&P=0&h=220",
    },
    {
      title: "Third title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.mF7Bow-HzwkpqvIJECqPswHaNT&pid=Api&P=0&h=220",
    },
    {
      title: "Four'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.839P1Rsx78PsWHeUC3jxowHaNK&pid=Api&P=0&h=220",
    },
    {
      title: "Five'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.fVzFmcabWGnimDlK24eXtwHaK5&pid=Api&P=0&h=220",
    },
    {
      title: "Six'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.yzry7jcyM9BhYWlS1yUlWgHaKH&pid=Api&P=0&h=220",
    },
    {
      title: "Seven'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Obeyw7BIov_sgL-2Hwl0MQHaJ-&pid=Api&P=0&h=220",
    },
    {
      title: "Eigh'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SRANMy2FrV86gMg7oQ-yFgHaIO&pid=Api&P=0&h=220",
    },
    {
      title: "Nine'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.vS7p4IgWqaCAHwVllyMPrAHaLP&pid=Api&P=0&h=220",
    },
    {
      title: "Ten'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.WpTYEaBnnGYEmqrxnX8HnQHaIJ&pid=Api&P=0&h=220",
    },
    {
      title: "Eleven'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://up.yimg.com/ib/th?id=OIP.kjwMnkRo8W9-4nlymg-KKQHaLg&%3Bpid=Api&w=474&c=1&rs=1&qlt=95",
    },
    {
      title: "Twelve'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://up.yimg.com/ib/th?id=OIP.42RhlGfSsV9xrCQcKaNsDQHaFj&%3Bpid=Api&w=474&c=1&rs=1&qlt=95",
    },
    {
      title: "First title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.bLQYxUbcL32mFGpUkU8sfwHaHr&pid=Api&P=0&h=220",
    },
    {
      title: "Second title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.CIeGI03X4xbFK1r7Dr25BAHaI4&pid=Api&P=0&h=220",
    },
    {
      title: "Third title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.mF7Bow-HzwkpqvIJECqPswHaNT&pid=Api&P=0&h=220",
    },
    {
      title: "Four'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.839P1Rsx78PsWHeUC3jxowHaNK&pid=Api&P=0&h=220",
    },
    {
      title: "Five'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.fVzFmcabWGnimDlK24eXtwHaK5&pid=Api&P=0&h=220",
    },
    {
      title: "Six'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.yzry7jcyM9BhYWlS1yUlWgHaKH&pid=Api&P=0&h=220",
    },
    {
      title: "Seven'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Obeyw7BIov_sgL-2Hwl0MQHaJ-&pid=Api&P=0&h=220",
    },
    {
      title: "Eigh'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SRANMy2FrV86gMg7oQ-yFgHaIO&pid=Api&P=0&h=220",
    },
    {
      title: "Nine'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.vS7p4IgWqaCAHwVllyMPrAHaLP&pid=Api&P=0&h=220",
    },
    {
      title: "Ten'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.WpTYEaBnnGYEmqrxnX8HnQHaIJ&pid=Api&P=0&h=220",
    },
    {
      title: "Eleven'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://up.yimg.com/ib/th?id=OIP.kjwMnkRo8W9-4nlymg-KKQHaLg&%3Bpid=Api&w=474&c=1&rs=1&qlt=95",
    },
    {
      title: "Twelve'th title",
      content: "Lorem ipsum dolor sit amet.",
      image:
        "https://up.yimg.com/ib/th?id=OIP.42RhlGfSsV9xrCQcKaNsDQHaFj&%3Bpid=Api&w=474&c=1&rs=1&qlt=95",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "15px",
          justifyContent: "space-around",
          padding: "5px",
        }}
      >
        {data.map((e, i) => {
          console.log(e);
          return <CharacterComp value={e} index={i} />;
        })}
      </div>
    </>
  );
}

export default CharacterData;
