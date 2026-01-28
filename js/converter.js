document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const urlInput = document.getElementById('youtubeUrl');
    const conversionSection = document.getElementById('conversion-process');
    const resultSection = document.getElementById('result-area');
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const steps = [
        "Extraindo áudio do YouTube...",
        "Analisando frequências...",
        "Detectando notas musicais...",
        "Otimizando MIDI para Piano Booster...",
        "Finalizando..."
    ];

    convertBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (!url) {
            alert('Por favor, insira uma URL válida do YouTube!');
            return;
        }

        // Reset UI
        conversionSection.classList.remove('hidden');
        resultSection.classList.add('hidden');
        convertBtn.disabled = true;

        // Simulate Process
        let progress = 0;
        let stepIndex = 0;

        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = `${progress}%`;

            // Update status text based on progress
            if (progress < 20) stepIndex = 0;
            else if (progress < 40) stepIndex = 1;
            else if (progress < 60) stepIndex = 2;
            else if (progress < 80) stepIndex = 3;
            else stepIndex = 4;

            progressText.innerText = `${progress}% - ${steps[stepIndex]}`;

            if (progress >= 100) {
                clearInterval(interval);
                finishConversion();
            }
        }, 50); // 50ms * 100 = 5 seconds total
    });

    function finishConversion() {
        setTimeout(() => {
            conversionSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
            resultSection.classList.add('animate-enter');
            convertBtn.disabled = false;

            // Show success toast
            showToast("Conversão concluída com sucesso!");
        }, 500);
    }

    function showToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
});
