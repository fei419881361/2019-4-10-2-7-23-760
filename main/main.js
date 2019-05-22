module.exports = function main(inputs) {
    // write your code here...
    let result = basicCharge()+normalCharge(inputs.distance)+increaseCharge(inputs.distance)+parkCharge(inputs.parkTime);
    return parseInt(result.toFixed(0));
   
};

// 停车时间收费情况
function parkCharge(parkTime){
    return parkTime * 0.25;
}

//基础收费
function basicCharge(){
    return 6;
}

//未超出8公里的正常收费
function normalCharge(distance){
    let feesPerKilometre = 0.8;
    if(distance<2) {
        return 0;
    }
    let countDis = distance - 2; // 带入计算的长度
    if(distance > 8){
        countDis = 6;
    }

    return feesPerKilometre * countDis; 
}

function increaseCharge(distance){
    let feesPerKilometre = 0.8 * 1.5;
    if(distance < 8) {
        return 0;
    }
    let countDis = distance - 8;
    return feesPerKilometre* countDis;
}