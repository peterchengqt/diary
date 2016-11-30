/**
 * Created by Perter on 2016/11/16.
 */
var modalAlert={
    id:"generator-modal-alert",
    init:function () {
        var self=this;
        //bind the hidden event to the modal which id is 'generator-modal-alert'
        $(document.body).on("hidden.bs.modal","#"+this.id,function () {
            //get the current 'generator-modal-alert' dom,if it is exists then remove it
            if(document.getElementById(self.id)){
                document.body.removeChild(document.getElementById(self.id));
            }
        })
        return this;
    },
    confirm:function (type,message,callback) {
        this.generatorModal(type,message,callback);
    },
    generatorModal:function (type,message,callback) {
        //generator a modal within the parameter "type" and "message"
        var container=document.createElement("div");
        container.id=this.id;
        container.className="modal fade";
        var dialog=document.createElement("div");
        dialog.className="modal-dialog";
        container.appendChild(dialog);
        var content=document.createElement("div");
        content.className="modal-content";
        dialog.appendChild(content);
        var header=document.createElement("div");
        header.className="modal-header";
        var h4=document.createElement("h4");
        h4.className="modal-title";
        h4.innerText=type;
        header.appendChild(h4);
        content.appendChild(header);
        var body=document.createElement("div");
        body.className="modal-body";
        var p=document.createElement("p");
        p.innerText=message;
        body.appendChild(p);
        content.appendChild(body);
        var foot=document.createElement("div");
        foot.className="modal-footer";
        var closeButton=document.createElement("button");
        closeButton.className="btn btn-primary";
        closeButton.setAttribute("type","button");
        closeButton.innerText="取消";
        foot.appendChild(closeButton);
        var ensureButton=document.createElement("button");
        ensureButton.className="btn btn-primary";
        ensureButton.setAttribute("type","button");
        ensureButton.innerText="确定";
        foot.appendChild(ensureButton);
        content.appendChild(foot);
        closeButton.onclick=function () {
            closeButton.onclick=null;
            ensureButton.onclick=null;
            $("#"+container.id).modal("hide");
        }
        ensureButton.onclick=function () {
            callback(true);
        }
        document.body.appendChild(container);
        $("#"+this.id).modal("show");
    },
    close:function () {
        $("#"+this.id).modal("hide");
    }
}