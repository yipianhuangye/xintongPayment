<template>
    <div class="login-wrap">
        <div class="ms-login-box">
            <div class="ms-login-img">
                <img class="ms-login-image" src="../../assets/login-img.png" />
            </div>
            <div class="ms-login">
                <div class="ms-title">{{$t('i18n.login')}}</div>
                <el-form
                    :model="param"
                    :rules="rules"
                    ref="login"
                    label-width="0px"
                    class="ms-content"
                >
                    <el-form-item prop="username">
                        <el-input v-model="param.username" placeholder="请输入用户名">
                            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="请输入密码">
                        <el-input
                            type="password"
                            placeholder="password"
                            v-model="param.password"
                            @keyup.enter.native="submitForm()"
                        >
                            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                        </el-input>
                    </el-form-item>
                    <div class="forget-password">{{$t('i18n.Fpassword')}}</div>
                    <el-button class="login-btn" @click="submitForm()">{{$t('i18n.login')}}</el-button>
                    <a class="login-tips"  @click="$i18n.locale = $i18n.locale === 'zh'?'en':'zh';">{{$t('i18n.login_btn')}}</a>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123123'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/login-bg.png);
    background-size: 100%;
}
.ms-login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    background: #fff;
    display: flex;
    align-items: center;
}
.ms-login-img {
    width: 60%;
    height: auto;
    display: inherit;
}
.ms-login-image {
    width: 100%;
    height: auto;
}

.ms-title {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(183, 39, 53, 1);
    line-height: 20px;
    padding-top: 10px;
}
.ms-login {
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.forget-password {
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 16px;
    margin: 10px 0 15px 0;
    text-align: right;
    cursor:pointer;
}
.login-btn {
    width: 100%;
    height: 37px;
    color: #fff;
    text-align: center;
    background: rgba(183, 39, 53, 1);
    border-radius: 5px;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    width: 100%;
    text-align: center;
    display: inline-block;
    font-size:10px;
    font-family:Source Han Sans CN;
    color:rgba(75,75,75,1);
    text-decoration: underline;
    cursor:pointer;
}
</style>