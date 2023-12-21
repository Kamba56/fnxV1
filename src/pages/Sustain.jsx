import { useEffect } from "react";

const Sustain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <main className="flex flex-col gap-11 items-center px-[6%] max-w-[1440px] m-auto py-20 pt-32">
      <h1 className="font-medium text-4xl">SFDR Sustainability Disclosures</h1>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium"></h2>
          <p className="text-base">The European Council and European Parliament Regulation (EU) 2019/2088 (“SFDR” or the “Disclosure Regulation”), seeks to establish a pan-European framework to facilitate Sustainable Investment. The Disclosure Regulation provides for a harmonised approach in respect of sustainability-related disclosures to investors within the EEA&apos;s financial services sector. In the absence of such harmonisation, individual EU Member States would be free to adopt divergent disclosure standards or develop different approaches, resulting in an uneven playing field and/or creating barriers to entry for asset managers looking to make available financial products within the internal market of the European Union. <br />The scope of the Disclosure Regulation is extremely broad, covering a very wide range of financial products and financial market participants. It seeks to achieve more transparency regarding how financial market participants integrate Sustainability Risks into their investment decisions and consideration of adverse sustainability impacts in the investment process. Its objectives are to: <br />a) strengthen protection for investors of financial products; <br />b) improve the disclosures made available to investors from financial market participants; and <br />c) improve the disclosures made available to investors regarding the financial products, to amongst other things, enable investors make informed investment decisions. <br />For the purposes of the Disclosure Regulation, FNX Dublin Limited meets the criteria of a financial market participant. <br />This document fulfils the disclosure requirements under Articles 3, 4 and 5 of SFDR for SAMI as a financial market participant. <br />In accordance with Article 3 of the SFDR, financial market participants are required to publish information on their strategies for integrating sustainability risks in their investment decision-making processes on their websites. <br />In accordance with Article 4 (1) of the SFDR, financial market participants shall make a statement on due diligence strategies related to the main adverse sustainability impacts of investment decisions on sustainability factors. <br />Furthermore, in accordance with Article 5 (1) of the SFDR, financial market participants shall include in their remuneration policies information on how those policies are consistent with the integration of sustainability risks and shall publish that information on their websites.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Sustainable Disclosure for Funds</h2>
          <p className="text-base">Under SFDR, funds have to be classified in one of the following categories: <br />a) Funds with sustainable investment objective (article 9); <br />b) Funds promoting environmental or social characteristics (article 6); and <br />c) Funds which either only integrate or do not take into account environmentally sustainable economic activities (article 6). <br />All funds managed by the Company are Article 6.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Principle of do no Significant Harm</h2>
          <p className="text-base">The Company takes a “best efforts” approach to assessing the principle of do no significant harm. The Company will, where appropriate and as disclosed in the relevant fund documentation, take into account guidance from the Taxonomy Regulation on environmental objectives.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Transparency of Sustainability Risk Policies</h2>
          <p className="text-base">In accordance with article 4 of the Regulation (EU) 2019/2088 on sustainability‐related disclosures in the financial services sector the Company, taking due account of their size, the nature and scale of their activities and the types of financial products they make available, considers the principal adverse impacts of their investment decisions on sustainability factors within the relevant field and/or practices. According to the SDFR, principal adverse impacts should be understood as those impacts of investment decisions and advice that result in negative effects on sustainability factors. <br />The Company takes a “best efforts” approach to assessing the adverse impact of investment decisions on sustainability. The Company will, where appropriate and as disclosed in the relevant fund documentation, take into account guidance from the Taxonomy Regulation on environmental objectives.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Remuneration Policy</h2>
          <p className="text-base">The Company acknowledges that sustainability risks may be relevant to the investments held by the Funds it manages however the Company does not currently take account of sustainability risks as a separate part of its investment decision making processes. <br />As such the Company’s Remuneration Policy does not provide for the assessment of variable remuneration due to performance of sustainable and separately market factors.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Integration of Sustainability Risks</h2>
          <p className="text-base">Article 6 Funds are not obliged to account for sustainability risks and as such the Company does not include these factors in the portfolio management process. However, to the extent that sustainability risks have an adverse impact on performance of the Funds, they are likely to be reflected in the overall portfolio management.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Adverse Impact at Financial Product Level</h2>
          <p className="text-base">Article 6 Funds are not obliged to account for sustainability risks and as such the Company does not include these factors in the portfolio management process. However, to the extent that sustainability risks have an adverse impact on performance of the Funds, they are likely to be reflected in the overall portfolio management.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Promotion of ESG factors</h2>
          <p className="text-base">The Company manages Article 6 funds, as such no qualification on environmental or social characteristics is made in pre-contractual disclosures.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Promotion of Sustainable Investments</h2>
          <p className="text-base">The Company manages Article 6 funds, as such no qualification on sustainable characteristics is made in pre-contractual disclosures.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Promotion of ESG factors on Website</h2>
          <p className="text-base">The Company manages Article 6 funds, as such no qualification on environmental or social characteristics is made on its website.</p>
        </div>

        <div className="flex flex-col gap-6" data-aos="fade-up">
          <h2 className="text-2xl font-medium">Promotion of ESG factors in Period Reports</h2>
          <p className="text-base">The Company manages Article 6 funds, as such no qualification on environmental or social characteristics is made in Periodic Reports.</p>
        </div>
      </div>
    </main>
  )
};

export default Sustain;
