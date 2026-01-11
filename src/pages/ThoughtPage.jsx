import { HeroSection, PartOneHeader, ConceptSection } from "../components2/HeroAndContext";
import { StagesSection, ConditionsSection, CharacteristicsSection } from "../components2/PreparationSections";
import { PartTwoHeader, TransitionViewsSection, TransitionTypesSection } from "../components2/RevolutionSections";
import { TransitionDetailsSection } from "../components2/TimelineSection";
import { ConclusionSection, ThankYouSection } from "../components2/ConclusionSection";
import Footer from "../components/Footer";

const ThoughtPage = () => (
  <div className="min-h-screen bg-slate-50">
    
    {/* ===== NGƯỜI 1: MỞ ĐẦU + MỤC 1, 2 ===== */}
    
    {/* 1. Mở đầu */}
    <div id="overview">
      <HeroSection />
    </div>

    {/* Header Phần I + Khái niệm + Hình thái */}
    <div id="part-one">
      <PartOneHeader />
      <ConceptSection />
      <StagesSection />
    </div>

    {/* ===== NGƯỜI 2: MỤC 3, 4 ===== */}
    
    {/* Điều kiện + Đặc trưng */}
    <div id="conditions">
      <ConditionsSection />
      <CharacteristicsSection />
    </div>

    {/* ===== NGƯỜI 3: PHẦN II ===== */}

    {/* Header Phần II + Quan điểm + Loại hình */}
    <div id="part-two">
      <PartTwoHeader />
      <TransitionViewsSection />
      <TransitionTypesSection />
    </div>

    {/* Đặc điểm 4 lĩnh vực */}
    <div id="features">
      <TransitionDetailsSection />
    </div>

    {/* Kết luận & Cảm ơn */}
    <div id="conclusion">
      <ConclusionSection />
      <ThankYouSection />
    </div>
    
    <Footer />
  </div>
);

export default ThoughtPage;