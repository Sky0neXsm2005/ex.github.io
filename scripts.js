document.getElementById('cta-button').addEventListener('click', function() {
    alert('จังหวะนี้เกรด4ต้องมา!');
});

document.getElementById('fake1').addEventListener('click', function() {
    alert('ยังไม่ทำขี้เกียจแล้ว!');
});

document.getElementById('fake2').addEventListener('click', function() {
    alert('เดี๋ยวผมกลับมาทำครับ');
});

document.getElementById('fake3').addEventListener('click', function() {
    alert('ช่วงปิดเทอมผมขอนั่งเรียนใหม่ในยูทูป');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const fifi = document.querySelector('.fifi');
    const overlay = document.getElementById('overlay');

    fifi.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});