let params = (new URL(document.location)).searchParams;
var plan_id = params.get("plan_id");
console.log(plan_id);

var plan_name = 'Plan';
var plan_price = 0.0;

if (plan_id == 1) {
    plan_name = '7-day plan';
    plan_price = 4.99;
} else {
    if (plan_id == 2) {
        plan_name = '1-month plan';
        plan_price = 14.99;
    } else {
        if (plan_id == 3) {
            plan_name = '3-month plan';
            plan_price = 21.99;
        } else {
            console.log('error');
            window.location.href = 'plan.html';
        }
    }
}
console.log(plan_name);
console.log(plan_price);
document.getElementById("plan_name").innerHTML = plan_name;
document.getElementById("plan_price").innerHTML = plan_price;
document.getElementById("plan_price_total").innerHTML = plan_price;