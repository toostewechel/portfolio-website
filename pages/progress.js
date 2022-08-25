import { styled } from "../stitches.config.js";
import { createRef, useEffect, useState } from "react";
import ReadingProgress from "../components/readingprogress/ReadingProgress.js";
import ContentHeader from "../components/header/ContentHeader.js";
import Paragraph from "../components/typography/Paragraph";
import Landing from "../components/about/landing/Landing.js";

const BackgroundImage = styled("div", {
  margin: 0,
  backgroundColor: "#FFE0B4",

  "@bp1": {
    backgroundImage: "url(/images/wallpaper.png)",
    opacity: 1,
    backgroundSize: "contain",
    backgroundPosition: "-264px center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
});


function Progress() {
  const targetRef = createRef();
  return (
    <div ref={targetRef}>
      <ContentHeader targetRef={targetRef} />
      <BackgroundImage />
      

      <div style={{width: "720px", padding: "32px", marginLeft: "auto", marginRight: "auto",}}>

        Capitalism taking over the web
        Since the web came into existence in 1989, it has steadily evolved into an ecosystem of large, corporate-controlled, centralised mega-platforms often referred to as “privately owned walled gardens”. Driven by capitalism, a few big players control the lion’s share of society’s assets and extract the most value. A prime example of the stranglehold companies have over our digital lives is the cloud market, where only four companies own 67% of the global market. Yet, in many ways, these mega-platforms are a positive development. They significantly improved usability and enabled billions of people to discover, create and publish content for near zero marginal cost without becoming experts on the underlying protocols.

        However, the web is increasingly becoming a place for public debate and a battleground for protecting freedom of speech and expression. So when a small number of stakeholders have outsized control over the content the public can create and consume, it becomes a target for censorship at the behest of national governments blocking specific content and excluding marginalised communities. As just a few platforms drive the most traffic to news sources, their opaque, unaudited curation algorithms can create bias and filter bubbles, exposing readers to stories that skew toward a readers’ preconceived (political) worldview. In light of the Snowden revelations, the Cambridge Analytica scandal and significant data breaches by LinkedIn and Facebook affecting billions of users, the public concerns around spying, polarisation and privacy on the web have grown exponentially over the last decade.

        We cannot expect governments, corporations, or large faceless organisations to grant us privacy and control of our data out of their goodwill. The status quo amasses our data for excessive profits and makes it easier for governments to conduct large-scale surveillance of their citizens. We must defend our privacy if we expect to have any. But why is privacy so fundamental to an open society?

        Privacy in an open society
        One doesn’t want the whole world to know a private matter, such as your financial data, location or telephone number. Privacy is the power to reveal oneself to the world selectively. When I purchase a book, there is no need to know who I am or when I send or receive messages; my provider doesn’t need to know to whom I am speaking or what others are saying to me. When the underlying mechanism of the transaction reveals my identity, I have no privacy as I cannot selectively reveal myself: I must always reveal myself. Therefore, privacy in an open society requires anonymous transaction systems only to disclose your identity when needed and strong cryptography so that information you share can only be seen by those for whom you intend it.

        Privacy is not only an individual right but also a social value, and almost every country recognises privacy as a universal human right. Besides, people have been defending their privacy for centuries with whispers, darkness, envelopes, closed doors, secret handshakes, and couriers. The past technologies did not allow for strong privacy, but today’s electronic technologies do.

        Proponents of the decentralised web want a new and better web that is open, private, secure, reliable and free from censorship. By creating and utilising decentralised infrastructure and tools, they want to distribute control more evenly, protect users’ privacy by default and shift ownership of data and society’s assets out of the hands of a few corporations back into the hands of users.

        What is the value of a decentralised web?
        It is essential to recognise that centralisation in and of itself is not a negative development. Many positive benefits in terms of usability, efficiency and performance can come from consolidating resources and managing economies of scale. However, these perks come at a cost. What we might win in terms of convenience and efficiency, we then lose in terms of control and freedom. However, as we move more and more of our lives from the physical to the digital world, the risks posed by centralised platforms increase significantly. That is because, in the centralised web, information is usually stored in a single location (e.g. server). In our applications, we point to this location and tell our device to find and retrieve things such as our Twitter or Instagram posts. This architectural design property eventually led to the monopolisation that has followed in the past decade because whoever controls the location controls access to the information. Ultimately, this results in power asymmetries where large platforms often dictate who can participate in certain services under the pressure of regulations. Clunky terms of service or abuse of platform guidelines can, in the worst case, lead to the loss of all information and intellectual property individuals store on such platforms.

        Decentralisation focuses on structural interventions that might realign power relationships between institutions (governments, corporates) and their end users. Properly designed decentralised systems strive to avoid any chokepoint where a single actor can constrain the use of the system while preserving as much of the usability properties of centralised systems. Important properties and concepts of distributed systems are:
        Censorship resistance - Censorship is the suppression of speech, public communication, or other information. In decentralised systems, users can publish and discover content directly to distributed storage systems without the need for intermediaries that can potentially censor information.
        Data portability and interoperability - Decentralised systems use open-source protocols and data standards to address the issue of data portability and interoperability. These properties enable greater competition and user choice by lowering the barrier to entry for new platforms. Users can seamlessly switch between different services without losing all their locked-in proprietary data as they do in current centralised platforms.
        Peer-to-Peer (P2P) networks - A P2P network is a distributed networking architecture that divides tasks or workloads across several computer systems (nodes), removing a single point of failure. P2P networks are highly resistant to attacks and, thus, more secure and scalable.
        Trust-less transparency networks - Blockchains are immutable, which means that once they record data on-chain, it becomes permanent and unalterable. Blockchains bring unprecedented trust and transparency to their users and provide complete data integrity and a verifiable, shared source of the truth.
        Ownership of data - To ensure data safety, (transactional) data is often cryptographically encrypted and stored on a (public) distributed blockchain ledger. The owner of the private key has complete access control (CRUD) and can always verify the integrity of its data.
        Self-Sovereign Identity (SSI) - SSI is a novel approach to digital identity that allows users to self-manage their digital identities without depending on third-party providers to store and centrally manage their data.

        Most applications might still look and feel like a toy today. Still, suppose developers combine these properties and concepts in the right way. In that case, it can significantly enhance the everyday experience of the web, creating, for example, a genuinely password-less web, privacy-preserving distributed machine learning tasks or a permaweb of data where documents and applications are stored forever. Moreover, these services can create whole new (digital) economies. Economies where virtually everyone has the chance to become a prosumer - people who simultaneously consume and produce – and where they trade their goods in peer-to-peer markets or share them for free without rent extracting intermediaries.

        However, the decentralised web is still in its infancy. As its goals undoubtedly appeal to the tech-savvy and politically inclined users, most users are not ideologically motivated and have no interest in using these, for now, more complex systems in their daily lives. There are still a lot of challenges that need to be solved before the technology crosses the chasm into mainstream adoption.

        What are the challenges of decentralised systems?
        There are still a lot of challenges that need to be solved before decentralised web applications can compete with the centralised killer apps that everyone loves and uses today. Firstly, it is technically more challenging to build a decentralised application because not all the data is in one place and developer adoption is still tiny compared to popular frameworks for developing web applications. In addition, developers often need to learn new mental models, programming patterns, and languages. However, many open-source frameworks and software development kits (SDKs) are emerging, enabling developers to iterate and compose (new) solutions quickly.

        Secondly, one of the most significant challenges with making decentralised applications usable for average users is security: how do we prevent users from losing access to their data? The mental model of security is entirely different in the decentralised web: you will have one 12 or 24-word long and unrecoverable password phrase (private key) known only to you but which you can connect to any decentralised application. However, lose your unique password, and you lose access to everything associated with that private key. Emerging options such as social recovery wallets that are both safe and easy to use are still in their infancy.

        The third challenge is monetisation and incentives. Since user data is vital for monetising current platforms, there is little incentive to adopt interoperable protocols as platforms would rather own all the data. Popular content generates the most revenue, so platforms are incentivised to prioritise viral, attention-grabbing and feel-good content. Designing robust reward mechanisms and placing curation of content in control of a community are still unsolved problems.

        Finally, as no central entity is in charge of the code, governance, regulatory and compliance issues still need to be ironed out. The digital domain requires regulation and control to establish a more legitimate and productive balance of power. These issues raise the question of the best way to conceive and conceptualise such norms and rules. A recent ban of an open source decentralised protocol in the US and the arrest of its developer show that we are still moving very much in uncharted waters. There is still no clear regulatory framework which raises questions from application developers about how they should develop their applications to comply. The regulatory uncertainty discourages innovation and could cause a brain drain in the space.

        Supercharging the web capabilities through semantics and agents
        Back in 1989, the inventor of the World Wide Web and true visionary, Tim Berners-Lee, already had the vision of a web of data, where information has a well-defined meaning, enabling computers and people to work in better cooperation. Unfortunately, for various reasons, it didn’t take off the first time, but as more layers of the web matured and became standardised over the years, it is now making its comeback.

        Currently, information on the web is mainly for human consumption and is not machine-readable. The main aim of the Semantic Web is to create distributed, interoperable and well-defined data. You can make data semantic by adding metadata according to the Resource Description Framework (RDF) or through Natural Language Processing (NLP). Simply put, metadata gives meaning to data and contains information needed to understand and find it more quickly. The goal of NLP is to make human language, which is complex and ambiguous, easy for machines to understand. Virtual Artificial Intelligence (AI) Assistants like Siri and Alexa are famous examples that use NLP.

        As a result, applications can use semantic data for search and discovery, automation tasks, aggregation and data exchange between applications, ultimately creating a more intelligent web. If we can achieve this vision, the web will become more powerful and easier to use. It would be like Wikipedia or Google, but far more encompassing and transformational. You could, for example, ask what the effect of the weather in Ireland is on cow prices and compute, in real-time, the likely cost of a steak at the supermarket. Or you could ask to book an appointment at a medical centre affiliated with your healthcare insurance within a radius of 10 km of your location next week, preferably on a Tuesday or Thursday between 9:00 AM and 12:00 AM.

        Through agent-based technologies, applications can mediate between user needs and different available information sources. Agents, also known as digital twins, can represent individuals, organisations or objects and look after their interests. They can act independently of constant input from their owner and autonomously execute actions to achieve their goal. Their purpose is to generate economic value for their owner in clearly defined domains.

        As people nowadays experience an endless onslaught of demand on their time and mental capacity, these intelligent digital twins can help save time by off-loading repetitive tasks and making complex decisions on behalf of its user in an ever-growing sea of information resources.

        The future of the web is looking bright but standing at a crossroads.
        As we slowly move into the third era of the internet, most of the core services you use and love today will likely be almost entirely rearchitected in the coming decades. Decentralised systems and semantic agent technologies will enable a more resilient and intelligent web to work automatically for its user’s (economic) interest. Whether decentralised or centralised systems win in the third era will ultimately come down to multiple factors. It depends on who will build the most user-friendly and compelling products and systems, who can win over the most high-quality developers and entrepreneurs and who can best comply with stringent regulations.

        Centralised systems often start fully-fledged: they are highly usable, performant, and efficient. They can quickly reach economies of scale, but they only get better at how quickly employees at the sponsoring company improve them. Decentralised systems, on the other hand, often start clunky with noticeable limitations in usability and performance but grow exponentially under the right conditions as they attract more contributors and reach product-market fit. The recent goldrush and future promises of cryptocurrency networks have undoubtedly increased the interest in and accelerated the rate of development of decentralised applications. The big question remains how and if decentralised systems can withstand the natural tendency to centralise, especially now when there is (big) money to be made.

        Nevertheless, at its core, the debate is not really about centralisation versus decentralisation. It is about whether or not future developments in the next era of the internet are net good or bad for humanity, not just as it stands today in an early form, but also in the promise it holds. It is all about the values users care about, and if those values don’t align, those users can choose to take their data and money and move to another platform.




      </div>
    </div>
  )
}

export default Progress;