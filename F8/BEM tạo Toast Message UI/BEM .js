function toast({
        title = '',
        message = '',
        type = 'info',
        duration = 3000

}) {
        const main = document.getElementById('toast');
        if (main) {
                const toast = document.createElement('div');
                const icons = {
                        success: 'fas fa-check-circle',
                        info: 'fas fa-info-circle',
                        warning: 'fas fa-exclamation-circle',
                        error: 'fas fa-exclamation-circle',
                };
                const icon =icons[type];
                toast.classList.add('toast', 'toast--${type}');
                toast.innerHTML =
                        `
        <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
        </div>

        <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
        </div>

        <div class="toast__close">
                <i class="fas fa-times"></i>
        </div>
               
                `
        }
}
toast({
        title: 'Success',
        message: 'Máy tính kết nối internet với Windows, Linux, MacOS',
        type: 'error',
        duration: 3000
});