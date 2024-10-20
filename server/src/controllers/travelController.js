import { Buffer } from "buffer"; // Buffer importieren
import https from "https";
// -------------------------Sabra Travel API------------------------------------
// Ihre Sabre API Zugangsdaten (Client ID und Secret)
const SABRE_CLIENT_ID = "mirzaii@ymail.com"; // Ersetzen Sie dies mit Ihrer Client ID
const SABRE_CLIENT_SECRET = "Arvin1357."; // Ersetzen Sie dies mit Ihrem Client Secret

// Funktion, um einen Sabre-API-Zugriffstoken zu erhalten
async function getSabreAccessToken() {
  return new Promise((resolve, reject) => {
    const auth = Buffer.from(
      `${SABRE_CLIENT_ID}:${SABRE_CLIENT_SECRET}`
    ).toString("base64");
    const options = {
      hostname: "api.sabre.com",
      path: "/v2/auth/token?grant_type=client_credentials",
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          const response = JSON.parse(data);
          resolve(response.access_token);
        } else {
          reject(new Error(`Fehler beim Abrufen des Zugriffstokens: ${data}`));
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
}

// Endpunkt zum Suchen von Flügen
app.get("/api/search-flights", async (req, res) => {
  const { origin, destination, departureDate } = req.query;

  if (!origin || !destination || !departureDate) {
    return res
      .status(400)
      .json({ error: "Bitte geben Sie Abflugort, Ziel und Abflugdatum an." });
  }

  try {
    const accessToken = await getSabreAccessToken();

    const options = {
      hostname: "api.sabre.com",
      path: `/v1/shop/flights?origin=${origin}&destination=${destination}&departuredate=${departureDate}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const flightRequest = https.request(options, (flightRes) => {
      let flightData = "";
      flightRes.on("data", (chunk) => {
        flightData += chunk;
      });

      flightRes.on("end", () => {
        if (flightRes.statusCode === 200) {
          const response = JSON.parse(flightData);
          res.json(response);
        } else {
          res
            .status(flightRes.statusCode)
            .json({ error: `Fehler bei der Flugsuche: ${flightData}` });
        }
      });
    });

    flightRequest.on("error", (error) => {
      console.error("Fehler bei der Flugsuche:", error);
      res.status(500).json({ error: "Fehler bei der Flugsuche" });
    });

    flightRequest.end();
  } catch (error) {
    console.error("Fehler bei der Flugsuche:", error);
    res.status(500).json({ error: "Fehler bei der Flugsuche" });
  }
});

// ----------------------------------------------------
