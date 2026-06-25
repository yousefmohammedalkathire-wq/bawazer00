// الحصول على عناصر النافذة والصورة الكبيرة
const modal = document.getElementById("imageModal");
const fullImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close-btn");

// تحديد جميع كروت المشاريع في الموقع
const projectCards = document.querySelectorAll(".project-card");

// إضافة حدث الضغط لكل كرت
projectCards.forEach(card => {
    card.addEventListener("click", function() {
        // العثور على الصورة الحقيقية داخل الكرت الذي تم الضغط عليه
        const imgSource = this.querySelector("img").src;
        
        // إظهار النافذة ووضع رابط الصورة داخلها
        modal.style.display = "block";
        fullImg.src = imgSource;
    });
});

// إغلاق النافذة عند الضغط على زر (X)
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// إغلاق النافذة تلقائياً إذا ضغط المستخدم في أي مكان خارج الصورة
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});