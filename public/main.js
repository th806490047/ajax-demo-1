let n = 1;
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/getStyle.css"); // readyState = 1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    alert("加载JS失败");
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/blueBox.html");
  request.onload = () => {
    // 创建 div 标签
    const div = document.createElement("div");
    // 填写 div 内容
    div.innerHTML = request.response;
    // 插入到身体里
    document.body.insertBefore(div, h1th);
  };
  request.onerror = () => {};
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/hello.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  request.send(); // readyState = 2
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/date.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response); //request.response 类型是字符串
      console.log(request.response);
      const object = JSON.parse(request.response);
      console.log(typeof object); //object 类型是对象
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send(); // readyState = 2
};

getPage.onclick = () => {
  console.log(n);
  const request = new XMLHttpRequest();
  if (n < 3) {
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    };
  } else {
    alert("没有下一页了");
  }
  request.send();
};
