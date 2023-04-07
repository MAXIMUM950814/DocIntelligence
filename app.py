#flask 前后端分离

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS


import re

from pprint import pprint
from paddlenlp import Taskflow


app = Flask(__name__)
CORS(app,resources=r'/*')





@app.route('/', methods=['GET','POST'])
def predict():
    default_input =  ["No", "开票日期","名称", "货物或应税劳务名称", "规格型号", "单位", "数量", "单价","金额","税率","税额","合计","备注","销货单位名称","纳税人识别号","地址电话","开户行及账号","开票人"]

    # #读取GET的图片参数
    # if request.method == 'POST':
    #     return render_template('index.html')
    if request.method == 'POST':
        #读取POST的图片参数
        data = request.json
        src = data.get("src")
        
        input = data.get("input")
        
        
        input = re.split(r'[,，;；\\]',input)
        print(input)
        if input == None:
            docprompt = Taskflow("document_intelligence")
            result = docprompt([{"doc": src, "prompt":default_input}])
        else:  
            docprompt = Taskflow("document_intelligence")
            result = docprompt([{"doc": src, "prompt":input}])
        
        

        #返回json格式的结果
        return jsonify(result)
    


    return render_template('index.html')
    


   


if __name__ == '__main__':
    app.run( host ='127.0.0.1',port=8080,debug=True)
    