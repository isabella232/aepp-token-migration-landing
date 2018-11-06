<template>
  <main class="home">
    <text-body>
      <h1>Imprint</h1>
      <p>
      Aeternity Establishment <br>
      Dr. Grass Str. 12, FL-9490 Vaduz <br>
      <a href="javascript:window.location.href = 'mailto:' + ['info','aeternity.com'].join('@')">info<!---->@<!---->aeternity.com</a><br>
      PEID / Steuernummer: 2528358 <br>
      Vat-Nr.: 60 351
      </p>
      <h2>Hinweise zum Datenschutz</h2>
      <p>Ihr Vertrauen ist uns wichtig. Deshalb respektieren wir den Datenschutz und informieren Sie über die erhobenen und gespeicherten Daten und Ihre Rechte auf Auskunft, Berichtigung, Sperrung und Löschung.</p>
      <ol>
        <li>
          <h3>Datenerhebung und -speicherung</h3>
      Wenn eine Webseite besucht wird, sendet der Browser grundsätzlich Informationen über Browsertyp und Browserversion, das verwandte Betriebssystem, die Referrer-URL, die IP-Adresse, den Dateinamen, den Zugriffsstatus, die übertragene Datenmenge, das Datum und die Uhrzeit der Serveranfrage. Diese Daten sind weder einer Person noch anderen Datenquellen zuzuordnen und werden zunächst gespeichert und nach einer statistischen Auswertung gelöscht.
        </li>
        <li>
          <h3>Cookies</h3>
      Ihr Browser speichert zudem so genannte Cookies. Dabei handelt es sich um Dateien, die ein Surfen im Internet benutzerfreundlicher gestalten sollen. Das speichern von Cookies kann in den Einstellungen Ihres Browsers ausgeschaltet werden.
        </li>
        <li>
          <h3>Auskunft, Berichtigung, Sperrung und Löschung</h3>
      Personenbezogene Daten werden nur mit Ihrer Einwilligung zur Beantwortung von Anfragen, Abwicklung von Verträgen und der technischen Administration erhoben und für Dritte unzugänglich gespeichert. Eine Weitergabe der Daten an Dritte erfolgt nur zum Zweck der Vertragsabwicklung bzw. bei Ihrer Einwilligung, welche jederzeit widerrufen werden kann. Eine Weitergabe oder ein Verkauf der personenbezogenen Daten findet nicht statt. Jederzeit kann von Ihnen Auskunft über die gespeicherten Daten, den Zweck der Speicherung und deren Herkunft verlangt werden. Zusätzlich besteht nach Maßgabe der gesetzlichen Bestimmungen ein Recht auf Berichtigung, Sperrung und Löschung der personenbezogenen Daten. Eine entsprechende Anfrage bzw. ein Begehren nach Berichtigung, Sperrung oder Löschung der personenbezogenen Daten ist über die auf der Webseite genannten Kontaktdaten möglich. Quelle und weitere Informationen: just law Rechtsanwälte Göttingen
        </li>
      </ol>
    </text-body>
    <app-footer/>
  </main>
</template>
<script>
import AppFooter from '@/components/app-footer.vue'
import TextBody from '@/components/text-body.vue'
export default {
  name: 'legal',
  components: {
  AppFooter,
  TextBody
  }
}
</script>
