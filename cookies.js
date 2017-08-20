/**
 * Created by marcinfortuna on 06.08.17.
 */
(function(){
    if( !localStorage.getItem('theothers-cookie-info')){
        var cookieInfo = document.createElement('div');
        cookieInfo.setAttribute('id', 'cookieInfo');
        cookieInfo.innerHTML = "<p>Wykorzystujemy ciasteczka (ang. cookies) oraz podobne technologie" +
            " w celu świadczenia usług, dostosowania serwisu do indywidualnych preferencji użytkowników oraz w celach" +
            " statystycznych i reklamowych. Możesz zawsze wyłączyć ten mechanizm w ustawieniach przeglądarki. Korzystanie" +
            " z naszego serwisu bez zmiany ustawień przeglądarki oznacza," +
            " że cookies będą zapisane w pamięci urządzenia. </p><span id='closeCookieInfo'>&times;</span>";
        document.body.appendChild(cookieInfo);
        document.getElementById('closeCookieInfo').addEventListener('click', function(){
            document.body.removeChild(document.getElementById('cookieInfo'));
            localStorage.setItem('theothers-cookie-info', '1');
        });
    }
}());