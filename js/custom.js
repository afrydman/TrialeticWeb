// Google Analytics initialization
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G605X8SG7V');



// Contact form submission
function SendContactForm() {
    var form = document.getElementById('contactForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }
    
    var name = $("#contactForm #name").val();
    var subject = $("#contactForm #subject").val();
    var mail = $("#contactForm #email").val();
    var message = $("#contactForm #message").val();

    $.ajax({
        type: "POST",
        url: "https://ykv64nip60.execute-api.us-east-1.amazonaws.com/prodStage/contact-mail-fc",
        accept: "*/*",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        data: JSON.stringify({ "desc": message, "name": name, "email": mail, "cname": subject })
    });

    $("#contactForm input").val("");
    $("#contactForm #message").val("");

    $("#sendForm").text("Sent");
    $("#sendForm").removeClass("btn-primary");
    $('#sendForm').addClass("btn-primary-sent");

    setTimeout(function () {
        $('#sendForm').removeClass("btn-primary-sent");
        $('#sendForm').addClass("btn-primary");
        $("#sendForm").text("Send!");
    }, 1000);

    return false;
}

// Subscribe function
function suscribe() {
    var mobile = $("#suscribe-input").val();
    var subject = "Mobile suscription";
    var mail = "Mobile suscription";
    var message = "Mobile suscription";

    $.ajax({
        type: "POST",
        url: "https://ykv64nip60.execute-api.us-east-1.amazonaws.com/prodStage/contact-mail-fc",
        accept: "*/*",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        data: JSON.stringify({ "desc": message, "name": mobile, "email": mail, "cname": subject })
    });

    $("#suscribe-button").text("Sending...");

    setTimeout(function () {
        $("#suscribe-button").text("Suscribe");
        $("#suscribe-input").val("");
    }, 1000);

    return false;
}

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    // Open modal when clicking on modal triggers
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('data-image');
            modalImg.src = imageSrc;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking on close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});
