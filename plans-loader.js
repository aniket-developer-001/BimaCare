const container = document.getElementById("popularPlans");
const PLAN_IMAGES = {
  
  844: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200",
  843: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200",
  845: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  846: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
  847: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200",
  848: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1200"
  
};
LIC_PLANS.forEach(plan => {

const card = document.createElement("div");
card.className = "insCard";

card.innerHTML = `
<div class="insTopImg">
<img src="${PLAN_IMAGES[plan.plan_number]}">
</div>

<div class="insBody">

<div class="insTitle">
${plan.plan_name}
</div>

<div class="priceRow">
<div class="premium">
Plan ${plan.plan_number}
<small>${plan.plan_type}</small>
</div>

 <button class="viewBtn">
              View <i class="fa-solid fa-arrow-right"></i>
            </button>
</div>

<div class="interest">
<span>Return</span>
<b>${plan.expected_return}</b>
</div>

</div>
`;

card.onclick = () => {
selectPlan(plan);
};

container.appendChild(card);

});


function selectPlan(plan) {
  
  localStorage.setItem("selected_plan", JSON.stringify(plan));
  
  window.location.href = "view.html";
  
}