const header = `
<header>
    <h1 id="logo"><a href="index.html"><img src="images/logo.png" alt="SAMPLE COMPANY"></a></h1>
    <!--PC用（901px以上端末）メニュー-->
    <nav id="menubar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="project-schema.html">Project Scheme</a></li>
            <li><a href="team-member.html">Team Member</a></li>
            <li><a href="seminar.html">Seminar</a></li>
            <li><a href="collaboration-work.html">Collaboration Works</a></li>
            <li><a href="research-exchange.html">Research Exchange</a></li>
            <li><a href="links.html">Links</a></li>
        </ul>
    </nav>
    <!--小さい端末用（900px以下端末）メニュー-->
    <nav id="menubar-s">
        <ul>
            <li><a href="company.html">Company</a></li>
            <li id="menubar_hdr2" class="close">Service
                <ul id="menubar-s2">
                    <li><a href="service.html">サービスメニュー</a></li>
                    <li><a href="service.html">サービスメニュー</a></li>
                    <li><a href="service.html">サービスメニュー</a></li>
                </ul>
            </li>
            <li><a href="recruit.html">Recruit</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
`;


document.write(header);