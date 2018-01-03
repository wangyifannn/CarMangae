var $table = $('#table');
$(function() {
    $('#toolbar').find('select').change(function() {
        $table.bootstrapTable('destroy').bootstrapTable({
            exportDataType: $(this).val()
        });
    });
})

window.operateEvents1 = {
    "click #btn_myimport": function(e, value, row, index) {
        var $this = $(this.parentNode.parentNode);
        // console.log($this.attr("className", "selected"));
        console.log(row.state);
        if (row.state == true) {
            $this.removeClass("selected");
            // console.log($this.children(".bs-checkbox input").prop("checked"));
            $this.children(".bs-checkbox input").prop("checked", "checked");
            row.state = false;
        } else if (row.state == undefined || row.state == false) {
            row.state = true;
            // console.log("row.state不等于true,改为" + row.state)
            $this.children(".bs-checkbox input").prop("checked", "");
            $this.addClass("selected");
        }
        //编辑详情事件
        // $(this).parent
        console.log(this);
        // console.log($(this));
        console.log(this.parentNode.parentNode.children[0].children[0]);
        console.log(this.parentNode.parentNode);
        // console.log(this.parentNode.parentNode.children[0].children[0].getAttribute("checked"));
        // detailmodal.open();
    }
}

function operateFormatter1(value, row, index) {
    return [
        '<button id="btn_myimport" type="button" class="RoleOfA btn-default bt-select btn btn-primary">删除</button>',
    ].join('');
}

function operateFormatter2(value, row, index) {
    return [
        '<button id="btn_myimport" type="button" class="RoleOfA btn-default bt-select btn btn-primary">详情</button>',
    ].join('');
}