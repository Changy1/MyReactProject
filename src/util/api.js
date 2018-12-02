import _ from 'lodash'

const api = {
    addInfo ({id, title, newprice, oldprice, imgurl}) {
        return new Promise( resolve => {
            setTimeout(async () => {
                let { info } = await this.getInfo()
                let oneinfo = _.find(info, item => item.id === id)
                if(oneinfo) {
                    oneinfo.num += 1
                } else {
                    info.push({
                        id, title, newprice, oldprice, imgurl, num: 1
                    })
                }
                this.changeInfo(info)
                
                resolve({ status: 200, info})
                
            },200)
        })
    },
    removeInfo ({id}) {
        return new Promise( resolve => {
            setTimeout(async () => {
                console.log(id)
                let { info } = await this.getInfo()
                _.remove( info, item => item.id === id )
                this.changeInfo(info)

                resolve({ status: 200, info })
            },200)
        })
    },
    getInfo () {
        return new Promise( resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    info: localStorage.info ? JSON.parse(localStorage.info) : []
                })
            },200)
        })
    },
    changeInfo (info) {
        localStorage.info = JSON.stringify(info)
    }
}

export default api