export const GET_STARTED_FORM_NAME = "get-started";

export type QualificationAnswer = "yes" | "no" | "";

export type GetStartedFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  mcAuthority: QualificationAnswer;
  insuranceCoverage: QualificationAnswer;
  operateAcrossStateLines: QualificationAnswer;
  factoringCompany: QualificationAnswer;
};

export const initialGetStartedFormData: GetStartedFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  mcAuthority: "",
  insuranceCoverage: "",
  operateAcrossStateLines: "",
  factoringCompany: "",
};

export const qualificationOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
] as const;

export const qualificationFields = [
  {
    name: "mcAuthority" as const,
    label: "Is your MC authority active for 1+ year?",
  },
  {
    name: "insuranceCoverage" as const,
    label: "Do you have active insurance coverage?",
  },
  {
    name: "operateAcrossStateLines" as const,
    label: "Do you operate across state lines?",
  },
  {
    name: "factoringCompany" as const,
    label: "Do you work with a factoring company?",
  },
];

function formatAnswer(value: QualificationAnswer) {
  if (value === "yes") return "Yes";
  if (value === "no") return "No";
  return "Not answered";
}

export async function submitGetStartedForm(
  data: GetStartedFormData
): Promise<{ ok: boolean; error?: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      error: "Form is not configured. Please contact support.",
    };
  }

  const qualificationSummary = qualificationFields
    .map((field) => `- ${field.label}: ${formatAnswer(data[field.name])}`)
    .join("\n");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New Get Started Application — Baywood Dispatch",
        from_name: data.fullName,
        name: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        botcheck: "",
        mc_authority_active_1_year: formatAnswer(data.mcAuthority),
        active_insurance_coverage: formatAnswer(data.insuranceCoverage),
        operate_across_state_lines: formatAnswer(data.operateAcrossStateLines),
        work_with_factoring_company: formatAnswer(data.factoringCompany),
        message: `New Get Started form submission.\n\nQualification answers:\n${qualificationSummary}`,
      }),
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      return {
        ok: false,
        error: result.message ?? "Something went wrong. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Unable to submit right now. Please try again." };
  }
}
