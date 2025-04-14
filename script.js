// 按钮功能实现
document.addEventListener('DOMContentLoaded', function() {
    // 1. 微信按钮功能
    const wechatButton = document.getElementById('wechatBtn');
    const qrCodeElement = document.getElementById('wechatQrCode');
    
    if (wechatButton && qrCodeElement) {
        // 为二维码添加关闭按钮
        const closeButton = document.createElement('div');
        closeButton.className = 'qr-close-btn';
        closeButton.innerHTML = '×';
        qrCodeElement.appendChild(closeButton);
        
        // 点击关闭按钮关闭二维码
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation();
            qrCodeElement.style.display = 'none';
        });
        
        // 无论设备类型，统一使用点击事件
        wechatButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // 如果已经显示，则关闭
            if (qrCodeElement.style.display === 'block') {
                qrCodeElement.style.display = 'none';
            } else {
                // 定位二维码在按钮下方
                const buttonRect = wechatButton.getBoundingClientRect();
                qrCodeElement.style.top = (buttonRect.bottom + window.scrollY + 5) + 'px';
                qrCodeElement.style.left = (buttonRect.left + window.scrollX) + 'px';
                qrCodeElement.style.display = 'block';
            }
        });
        
        // 阻止点击二维码时关闭
        qrCodeElement.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // 图片加载失败处理
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            if (this.parentElement.classList.contains('wechat-qr-code')) {
                this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect fill="%23CCC" width="80" height="80"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="8" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E微信二维码%3C/text%3E%3C/svg%3E';
            }
        };
    });
});

// 判断鼠标是否正在移向二维码区域
function isMouseMovingToQrCode(event, qrCodeElement) {
    const qrCodeRect = qrCodeElement.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    return (
        mouseX >= qrCodeRect.left - 10 &&
        mouseX <= qrCodeRect.right + 10 &&
        mouseY >= qrCodeRect.top - 10 &&
        mouseY <= qrCodeRect.bottom + 10
    );
}

// 适配移动设备高度问题
function adjustHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('orientationchange', adjustHeight);
adjustHeight(); 