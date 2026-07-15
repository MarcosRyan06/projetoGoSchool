/* ==========================================
   LÓGICA CONSOLIDADA - GO SCHOOL
   ========================================== */

/**
 * Função para alternar o tema do card entre Azul (Responsável) e Laranja (Motorista)
 * Usada nas telas: login.html e recuperarsenha.html
 */
function switchTheme(role, cardId, btnRespId, btnMotId) {
    const card = document.getElementById(cardId);
    const btnResponsavel = document.getElementById(btnRespId);
    const btnMotorista = document.getElementById(btnMotId);
    const bus = document.getElementById('schoolBus');

    if (!card) return;

    if (role === 'motorista') {
        card.classList.add('theme-motorista');
        if (btnResponsavel && btnMotorista) {
            btnResponsavel.className = 'role-btn inactive-responsavel';
            btnMotorista.className = 'role-btn active-motorista';
        }
        if (bus) {
            bus.querySelectorAll('rect, path').forEach(el => {
                if (el.getAttribute('fill') === '#1553df' || el.getAttribute('stroke') === '#1553df') {
                    el.setAttribute('fill', '#ff6600');
                }
            });
        }
    } else {
        card.classList.remove('theme-motorista');
        if (btnResponsavel && btnMotorista) {
            btnResponsavel.className = 'role-btn active-responsavel';
            btnMotorista.className = 'role-btn inactive-motorista';
        }
        if (bus) {
            bus.querySelectorAll('rect, path').forEach(el => {
                if (el.getAttribute('fill') === '#ff6600' || el.getAttribute('stroke') === '#ff6600') {
                    el.setAttribute('fill', '#1553df');
                }
            });
        }
    }
}

/**
 * Função utilitária para exibir/esconder a senha
 * Usada nas telas de Cadastro e Login
 */
function togglePassword(inputId, eyeIconId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeIconId);

    if (!passwordInput || !eyeIcon) return;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        `;
        eyeIcon.style.color = 'var(--current-primary)';
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
        `;
        eyeIcon.style.color = 'var(--text-muted)';
    }
}

/**
 * Função para pré-visualização da imagem de perfil carregada
 * Usada nos formulários de cadastro
 */
function previewImage(event, previewId, iconId) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById(previewId);
        const cameraIcon = document.getElementById(iconId);
        
        if (preview && cameraIcon) {
            preview.src = reader.result;
            preview.style.display = 'block';
            cameraIcon.style.display = 'none';
        }
    }
    if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

/**
 * Função para controle de expansão dos cards na escolha de perfil
 * Usada na tela: escolherperfil.html
 */
function toggleProfileCard(profileType, cardRespId, cardMotId, subtitleId) {
    const cardResponsavel = document.getElementById(cardRespId);
    const cardMotorista = document.getElementById(cardMotId);
    const subtitle = document.getElementById(subtitleId);

    if (!cardResponsavel || !cardMotorista) return;

    if (profileType === 'responsavel') {
        const isAlreadyActive = cardResponsavel.classList.contains('active');
        cardMotorista.classList.remove('active');
        
        if (isAlreadyActive) {
            cardResponsavel.classList.remove('active');
            if (subtitle) subtitle.textContent = "Selecione o perfil que melhor te representa para continuar o cadastro.";
        } else {
            cardResponsavel.classList.add('active');
            if (subtitle) subtitle.textContent = "Explore as possibilidades da conta de Responsável e inicie seu cadastro.";
        }
    } else if (profileType === 'motorista') {
        const isAlreadyActive = cardMotorista.classList.contains('active');
        cardResponsavel.classList.remove('active');
        
        if (isAlreadyActive) {
            cardMotorista.classList.remove('active');
            if (subtitle) subtitle.textContent = "Selecione o perfil que melhor te representa para continuar o cadastro.";
        } else {
            cardMotorista.classList.add('active');
            if (subtitle) subtitle.textContent = "Explore as possibilidades da conta de Motorista e inicie seu cadastro.";
        }
    }
}

/**
 * Armazena a seleção de perfil no localStorage e envia para a confirmação
 */
function selectProfile(type, event) {
    if (event) event.stopPropagation();
    localStorage.setItem('selected_profile', type);
    window.location.href = 'confirmarperfil.html';
}