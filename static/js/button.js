function submitText() {
    //获取网页中图片的src
    var img = document.getElementById("img-one");
    var src = img.src;


    // var textBox = document.getElementById("text-one");
    // var text = textBox.value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Success!");
            //接受数据
            var data = JSON.parse(this.responseText);
            console.log(data);
            //遍历data
            var text = document.getElementById("text-one");
            for (var i = 0; i < data.length; i++) {
                text.value += data[i].prompt +":"+data[i].result[0].value + "\n";
            }


            

        }
    }
    xhr.send(JSON.stringify({src: src}));
}


function submitText2() {
    //获取网页中图片的src
    var img = document.getElementById("img-two");
    var src = img.src;


    var input = document.getElementById("input-one");
    var input = input.value;


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Success!");
            //接受数据
            var data = JSON.parse(this.responseText);
            console.log(data);
           
            var text = document.getElementById("text-two");
            for (var i = 0; i < data.length; i++) {
                text.value += data[i].prompt +":"+data[i].result[0].value + "\n";
            }


            

        }
    }
    xhr.send(JSON.stringify({src: src, input: input}));
}

function submitText3() {
    //获取网页中图片的src
    var img = document.getElementById("img-three");
    var src = img.src;


    var input = document.getElementById("input-two");
    var input = input.value;


    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Success!");
            //接受数据
            var data = JSON.parse(this.responseText);
            console.log(data);
           
            var text = document.getElementById("text-three");
            for (var i = 0; i < data.length; i++) {
                text.value += data[i].prompt +":"+data[i].result[0].value + "\n";
            }


            

        }
    }
    xhr.send(JSON.stringify({src: src, input: input}));
}

