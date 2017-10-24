# POS (Point of Sale)
-Aplikacionet POS janë programe të cilat përdoren në të gjitha pikat e shitjeve, supermarkete, restorante, dyqane, kioska
etj., të cilat mundësojnë një pamje të menjëherëshme të artikujve që shiten dhe faturës që po krijohet
nga shitësi, me qëllim që regjistrimi të jetë sa me i thjeshtë dhe i shpejtë.
Aplikacioni është në teknologjinë WEB, vetëm si frontend page, duke
përdorur teknika vetëm të frontend në Javascript, HTML dhe CSS.
Gjithashtu janë përdorur librari të Bootstrap.

Aplikacioni ka një file newPos.html.
 Dritarja kryesore,ka  një kokë dhe një dritare anësore e cila momentalisht është bosh. Koka përmban këto elementë:
- Emrin e aplikacionit
- Datën e ditës aktuale që hapet programi
- Emrin e përdoruesit (statik) që po e përdor
- Një buton 

-Përmbajtja e brendshme e faqes ndahet në dy div-e të mëdhaja (left dhe right). Div-i në të
majtë përmban funksionalitetet e krijimit të faturës, kurse div-i në të
djathtë mban një buton ( Shit kartë dhuratë) e cila në klikim hap modal.
Ka një buton për numrin e kartës e cila në klikim gjeneron numër të rastësishëm.

-Klienti rastesor është nje combo e cila do të mbushet me të gjithë klientët e krijuar. Në të djathtë të combo input ka një
buton e cila do të hapë një dritare për regjistrimin e klientëve të rinj.
- Shto klient si buton do të ruaj klientin e ri dhe do ta shtojë automatikisht në listën e klientëve rastësor si një klient të ri.

- Në fund ndodhet një buton Pagesa, e cila në klikim do të hapë një modal me të dhëna mbi cmimin e produkteve. Vlerat e mesit janë prerjet e monedhave. Vlera e fundit fshin vlerën e dhënë nga paguesi.
