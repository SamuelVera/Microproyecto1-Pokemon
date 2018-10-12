export class Pokemon{
    name: String;
    _id: String;
    pkdx_id: String;
    national_id: String;
    __v: number;
    image_url: String;
    description: String;
    art_url: String;
    types: [
        String,
        String
    ]
    evolutions: [
        {
          level: number,
          method: String,
          to: String,
          ev_id: String
        }
      ]
  }