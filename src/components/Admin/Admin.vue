<template>
  <div class="admin-container">
    <div class="admin-content">
      <div class="admin-operation-area">
        <div>
          <el-input class="admin-search-input" v-model="input" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>

        <el-button type="primary" @click="handleEstablishAdmin">
          创建管理员
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </div>
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#CB3948',color:'#fff',textAlgin:'center'}"
        align="center"
        border
        style="width: 100%"
      >
        <el-table-column align="center" prop="name" label="姓名"></el-table-column>
        <el-table-column align="center" prop="number" label="账号"></el-table-column>
        <el-table-column align="center" prop="remarks" label="备注"></el-table-column>
        <el-table-column align="center" prop="city" label="密码重制"></el-table-column>
        <el-table-column align="center" prop="province" label="冻结/激活">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="activationOrFrozenRow(scope.$index, tableData)"
              type="text"
              size="small"
            >冻结</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination-box"
        background
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        :total="1000"
      ></el-pagination>

      <!-- 编辑弹出框 -->
      <el-dialog class="add-admin-box" :visible.sync="editVisible" width="30%">
        <div class="add-title">
          <img src="../../assets/img001.png" />
          <span>创建管理员</span>
          <img src="../../assets/img001.png" />
        </div>
        <el-form ref="form" :model="form">
          <el-form-item >
            <el-input class="input-half" v-model="form.name" placeholder="姓名"></el-input>
            <el-input class="input-half" v-model="form.phone" placeholder="电话"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input class="input-half" v-model="form.number" placeholder="账号"></el-input>
            <el-input class="input-half" v-model="form.mail" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.Remarks" placeholder="备注"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class="establish-btn" type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          number: "273482374834343",
          province: "上海",
          city: "普陀区",
          remarks: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "王小虎",
          number: "273482374834343",
          province: "上海",
          city: "普陀区",
          remarks: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "王小虎",
          number: "273482374834343",
          province: "上海",
          city: "普陀区",
          remarks: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "王小虎",
          number: "273482374834343",
          province: "上海",
          city: "普陀区",
          remarks: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      input: "",
      editVisible: false,
      form: {}
    };
  },
  methods: {
    activationOrFrozenRow(index, rows) {
      console.log("冻结");
      console.log(index);
      console.log(rows);
    },
    handleEstablishAdmin() {
        this.editVisible = true;
    }
  }
};
</script>

<style>
.el-table {
  border-radius: 5px;
}
.admin-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-content {
  width: 60%;
  background: #fff;
  box-shadow: 0px 5px 11px 1px rgba(222, 222, 225, 0.5);
  border-radius: 10px;
  padding: 25px 15px 25px 15px;
}
.admin-operation-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.admin-search-input {
  width: 250px;
}
.pagination-box {
  margin-top: 10px;
  text-align: right;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #cb3948;
}

.el-dialog {
  background: #ededed;
  border-radius: 5px;
}
.add-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 20px;
}
.add-title img {
  width: 20px;
  height: auto;
}
.add-title span {
  margin: 0 5px;
}
.el-form-item__content{
   display: flex;
   align-items: center;
}
.input-half{
   flex:1;
}

.dialog-footer{
   display: flex;
   align-items: center;
   justify-content: center;
}

.el-form-item{
   margin-bottom: 12px;
}
.establish-btn{
   width: 60%;
   background:rgba(203,57,72,1);
   border-radius:18px;
   font-size:18px;
   font-family:Source Han Sans CN;
   font-weight:500;
   color:rgba(255,255,255,1);
   line-height:17px;
   border: none;
}
.el-button--primary:hover{
   background: rgba(203,57,72,1);
   color: #fff;
}
.el-dialog__footer{
   padding-top: 0;
}
</style>