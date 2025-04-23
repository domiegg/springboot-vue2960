const base = {
    get() {
        return {
            url : "http://localhost:8080/yiqingfangkong/",
            name: "yiqingfangkong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiqingfangkong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情防控管理系统"
        } 
    }
}
export default base
