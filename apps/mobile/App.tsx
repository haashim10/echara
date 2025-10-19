import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NativeWindStyleSheet, styled } from "nativewind";
import {
  buyerHighlights,
  getTrendingVendors,
  howItWorks,
  type VendorSummary,
  vendorHighlights,
} from "@echara/core";
import { getFonts, getPalette, getRadii } from "@echara/tokens";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const toNumber = (value: string) => {
  if (value.endsWith("rem")) {
    return parseFloat(value) * 16;
  }

  if (value.endsWith("px")) {
    return parseFloat(value);
  }

  const parsed = parseFloat(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);

function useTheme() {
  const scheme = useColorScheme();
  const mode = scheme === "dark" ? "dark" : "light";

  return useMemo(() => {
    const palette = getPalette(mode);
    const fonts = getFonts();
    const radii = getRadii();

    const primaryFont =
      fonts.sans.split(",")[0]?.trim().replaceAll('"', "") ?? "System";
    const displayFont =
      fonts.display.split(",")[0]?.trim().replaceAll('"', "") ?? primaryFont;

    return {
      mode,
      palette,
      fonts: {
        primary: primaryFont,
        display: displayFont,
      },
      radii: {
        sm: toNumber(radii.sm) ?? 6,
        md: toNumber(radii.md) ?? 12,
        lg: toNumber(radii.lg) ?? 18,
      },
    };
  }, [mode]);
}

export default function App() {
  const theme = useTheme();
  const [vendors, setVendors] = useState<VendorSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getTrendingVendors()
      .then((response) => {
        if (isMounted) {
          setVendors(response);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.palette.background,
        }}
      >
        <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
        <StyledScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 32,
            gap: 32,
          }}
        >
        <View style={{ gap: 16 }}>
          <StyledText
            style={{
              fontSize: 12,
              letterSpacing: 3,
              fontWeight: "600",
              textTransform: "uppercase",
              color: `${theme.palette.foreground}99`,
              textAlign: "center",
            }}
          >
            UK Weddings • Events • Experiences
          </StyledText>
          <StyledText
            style={{
              fontSize: 28,
              textAlign: "center",
              fontFamily: theme.fonts.display,
              color: theme.palette.foreground,
            }}
          >
            Book wedding vendors you’ll love, with confidence
          </StyledText>
          <StyledText
            style={{
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
              color: theme.palette.muted,
            }}
          >
            Transparent pricing, availability, and messaging—so you can
            shortlist, compare and confirm without the back-and-forth.
          </StyledText>
        </View>

        <StyledView className="gap-6" style={{ marginBottom: 12 }}>
          <HighlightSection
            title="For couples & planners"
            highlights={buyerHighlights.map((highlight) => highlight.copy)}
            theme={theme}
            accentColor={theme.palette.brandPrimary}
          />
          <HighlightSection
            title="For vendors & venues"
            highlights={vendorHighlights.map((highlight) => highlight.copy)}
            theme={theme}
            accentColor={theme.palette.brandSecondary}
          />
        </StyledView>

        <StyledView className="gap-4">
          <StyledText
            style={{
              fontSize: 22,
              color: theme.palette.foreground,
              fontFamily: theme.fonts.display,
            }}
          >
            This week’s trending vendors
          </StyledText>
          {loading ? (
            <View style={{ paddingVertical: 20 }}>
              <ActivityIndicator color={theme.palette.brandPrimary} />
            </View>
          ) : (
            <StyledView className="gap-3">
              {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} theme={theme} />
              ))}
            </StyledView>
          )}
        </StyledView>

        <StyledView
          className="gap-3"
          style={{
            backgroundColor: theme.palette.surface,
            padding: 20,
            borderRadius: theme.radii.lg,
            borderWidth: 1,
            borderColor: theme.palette.border,
          }}
        >
          <StyledText
            style={{
              fontSize: 22,
              color: theme.palette.foreground,
              fontFamily: theme.fonts.display,
            }}
          >
            How Echara keeps everyone in sync
          </StyledText>
          <StyledView className="gap-4">
            {howItWorks.map((step) => (
              <StyledView key={step.id} className="gap-1">
                <StyledText
                  style={{
                    fontSize: 18,
                    color: theme.palette.brandSecondary,
                    fontFamily: theme.fonts.display,
                  }}
                >
                  {step.title}
                </StyledText>
                <StyledText
                  style={{
                    fontSize: 14,
                    lineHeight: 20,
                    color: theme.palette.muted,
                  }}
                >
                  {step.description}
                </StyledText>
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
        </StyledScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

interface HighlightSectionProps {
  title: string;
  highlights: string[];
  accentColor: string;
  theme: ReturnType<typeof useTheme>;
}

function HighlightSection({
  title,
  highlights,
  accentColor,
  theme,
}: HighlightSectionProps) {
  return (
    <StyledView
      className="gap-4"
      style={{
        backgroundColor: theme.palette.surface,
        padding: 20,
        borderRadius: theme.radii.lg,
        borderWidth: 1,
        borderColor: theme.palette.border,
      }}
    >
      <StyledText
        style={{
          fontSize: 20,
          color: theme.palette.foreground,
          fontFamily: theme.fonts.display,
        }}
      >
        {title}
      </StyledText>
      <StyledView className="gap-3">
        {highlights.map((highlight) => (
          <StyledView key={highlight} className="flex-row items-start gap-3">
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 6,
                marginTop: 4,
                backgroundColor: accentColor,
              }}
            />
            <StyledText
              style={{
                flex: 1,
                fontSize: 14,
                lineHeight: 20,
                color: theme.palette.muted,
              }}
            >
              {highlight}
            </StyledText>
          </StyledView>
        ))}
      </StyledView>
    </StyledView>
  );
}

interface VendorCardProps {
  vendor: VendorSummary;
  theme: ReturnType<typeof useTheme>;
}

function VendorCard({ vendor, theme }: VendorCardProps) {
  return (
    <StyledView
      className="gap-2"
      style={{
        backgroundColor: theme.palette.surface,
        padding: 18,
        borderRadius: theme.radii.md,
        borderWidth: 1,
        borderColor: theme.palette.border,
      }}
    >
      <StyledView className="flex-row items-center justify-between">
        <StyledText
          style={{
            fontSize: 18,
            fontFamily: theme.fonts.display,
            color: theme.palette.foreground,
          }}
        >
          {vendor.name}
        </StyledText>
        <StyledText
          style={{
            fontSize: 12,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 9999,
            overflow: "hidden",
            color: theme.palette.brandPrimary,
            backgroundColor: theme.palette.accentSoft,
          }}
        >
          {vendor.category}
        </StyledText>
      </StyledView>
      <StyledText
        style={{
          fontSize: 14,
          color: theme.palette.muted,
        }}
      >
        {vendor.headlineStat}
      </StyledText>
    </StyledView>
  );
}
