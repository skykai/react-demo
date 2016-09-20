##react-redux 列表案例  

###参考项目
    [redux-async](https://github.com/reactjs/redux/tree/master/examples/async)

###实现功能
    请求[CNode api](https://cnodejs.org/api)获取相应tag下的列表数据
    点击切换tab,重新获取对应tag下的列表数据

###未实现功能
    分页器

###启动
    npm install
    npm start

    访问(http://localhost:3000/)

###stroe数据格式
    {
        selectTag: ‘all’,
        topicsByTag: {
            isFetching: true,
            item: [{
                id: "572afb6b15c24e592c16e1e6",
                author_id: "504c28a2e2b845157708cb61",
                tab: "share",
                content: "<div class="markdown-text"><p>之前的 <a href="https://github.com/lanceli/cnodejs-ionic">cnode-ionic</a> 由于作者缺少维护，所以换成由 <a href="/user/soliury">@soliury</a> 开发的 Noder 。</p> <h2>Gif 动图</h2> <p><img src="http://7lrzfj.com1.z0.glb.clouddn.com/soliurynoder-v1.0.0.gif" alt="noder"></p> <h2>截屏</h2> <p><img src="//dn-cnode.qbox.me/FgZzwtWWGDsn4MuWDCOp8b-03620" alt="1.noderpic.jpg"> <img src="//dn-cnode.qbox.me/FjCeCpDW9amfuL8wAweONwBXdimI" alt="2.noderpic.jpg"> <img src="//dn-cnode.qbox.me/FtrGjfklUrXV-oFrvR9PEdv-ddhf" alt="4.noderpic.jpg"></p> <p>Noder 使用 react-native 开发，支持 ios 与 android 。欢迎大家试用。</p> <p><a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a></p> <h3>ChangeLog</h3> <ul> <li>v1.0.1: <a href="https://github.com/soliury/noder-react-native/releases/tag/v1.0.1">https://github.com/soliury/noder-react-native/releases/tag/v1.0.1</a></li> </ul> </div>",
                title: "新的社区推荐客户端：Noder",
                last_reply_at: "2016-05-18T04:30:39.557Z",
                good: false,
                top: true,
                reply_count: 121,
                visit_count: 6487,
                create_at: "2016-05-05T07:51:07.576Z",
                author: {
                    loginname: "alsotang",
                    avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"
                }
            }]
        },
        pages: {
            index: 1,
            limit: 20
        }
    }
