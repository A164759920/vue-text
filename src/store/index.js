const store = {
    state: {},
    setAction: function (stateKey, newValue) {
        this.state[stateKey] = newValue;
        console.log(this.state)        
    },
    clearAction: function (stateKey) {
        this.state[stateKey] = '',
        console.log(this.state) 
    },
    getAction: function (stateKey) {
        console.log(this.state) 
        return this.state[stateKey];
    },
    userinfo: {}, //模拟用户信息
    setUserInfo: function (userName,userKey) {
        this.userinfo[userName] = userKey;
        console.log(this.userinfo)
    },

    checkUserInfo: function (userNameIn,userKeyIN) {
        for (let i in this.userinfo)
        {
            if (i === userNameIn && userKeyIN === this.userinfo[i])
            {
                return true;
            }
            return false;
        }
    },
}

export default store