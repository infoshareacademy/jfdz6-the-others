/**
 * Created by marcinfortuna on 06.08.17.
 */
(function () {
    if (!localStorage.getItem('theothers-cookie-info')) {
        var cookieInfo = document.createElement('div');
        cookieInfo.setAttribute('id', 'cookieInfo');
        cookieInfo.innerHTML = "<h1>Ta strona przechowuje cookies.</h1><p>theothers.com korzysta z plików cookies. Pozostając na tej stronie, wyrażasz zgodę na korzystanie z tych plików.</p><span id='closeCookieInfo'>&times;</span>";
        document.body.appendChild(cookieInfo);
        document.getElementById('closeCookieInfo').addEventListener('click', function () {
            document.body.removeChild(document.getElementById('cookieInfo'));
            localStorage.setItem('theothers-cookie-info', '1');
        });
    }
}());