import { NextResponse } from "next/server";
import {
  sendProjectionLeadEmail,
  sendUserAutoReplyEmail,
} from "@/lib/projection/mailer";
import type {
  ProjectionAnswers,
  ProjectionResult,
} from "@/lib/projection/types";

type LeadRequest = {
  firstName?: string;
  email?: string;
  activity?: string;
  message?: string;
  answers?: ProjectionAnswers;
  projectionSnapshot?: ProjectionResult | null;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadRequest;

    const firstName = body.firstName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const activity = body.activity?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const answers = body.answers ?? {};
    const projectionSnapshot = body.projectionSnapshot ?? null;

    if (!firstName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Le prénom et l’email sont obligatoires.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Adresse email invalide.",
        },
        { status: 400 }
      );
    }

    await sendProjectionLeadEmail({
      firstName,
      email,
      activity,
      message,
      answers,
      projectionSnapshot,
    });

    await sendUserAutoReplyEmail({
      firstName,
      email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[projection:lead:error]", error);

    return NextResponse.json(
      {
        success: false,
        error: "Envoi indisponible pour le moment.",
      },
      { status: 500 }
    );
  }
}
