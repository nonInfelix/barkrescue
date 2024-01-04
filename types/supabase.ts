export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dogs: {
        Row: {
          category: string | null
          character: string | null
          color: string | null
          fci_group: string | null
          id: string
          img: string | null
          lifespan: string | null
          name: string
          origin_country: string | null
          role: string | null
          section: string | null
          size: string | null
          sports: string | null
          weight: string | null
        }
        Insert: {
          category?: string | null
          character?: string | null
          color?: string | null
          fci_group?: string | null
          id?: string
          img?: string | null
          lifespan?: string | null
          name: string
          origin_country?: string | null
          role?: string | null
          section?: string | null
          size?: string | null
          sports?: string | null
          weight?: string | null
        }
        Update: {
          category?: string | null
          character?: string | null
          color?: string | null
          fci_group?: string | null
          id?: string
          img?: string | null
          lifespan?: string | null
          name?: string
          origin_country?: string | null
          role?: string | null
          section?: string | null
          size?: string | null
          sports?: string | null
          weight?: string | null
        }
        Relationships: []
      }
      shelter_dogs: {
        Row: {
          add_imgs: string[] | null
          age: number | null
          created_at: string
          description: string | null
          dog_id: string | null
          gender: string | null
          health_status: string | null
          id: string
          isActive: boolean
          main_img: string | null
          name: string | null
          shelter_id: string
        }
        Insert: {
          add_imgs?: string[] | null
          age?: number | null
          created_at?: string
          description?: string | null
          dog_id?: string | null
          gender?: string | null
          health_status?: string | null
          id?: string
          isActive?: boolean
          main_img?: string | null
          name?: string | null
          shelter_id: string
        }
        Update: {
          add_imgs?: string[] | null
          age?: number | null
          created_at?: string
          description?: string | null
          dog_id?: string | null
          gender?: string | null
          health_status?: string | null
          id?: string
          isActive?: boolean
          main_img?: string | null
          name?: string | null
          shelter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shelter_dogs_dog_id_fkey"
            columns: ["dog_id"]
            isOneToOne: false
            referencedRelation: "dogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shelter_dogs_shelter_id_fkey"
            columns: ["shelter_id"]
            isOneToOne: false
            referencedRelation: "shelters"
            referencedColumns: ["id"]
          }
        ]
      }
      shelters: {
        Row: {
          created_at: string
          email: string | null
          id: string
          location: string | null
          logo_img: string | null
          name: string | null
          registergericht: string | null
          registernummer: string | null
          street: string | null
          street_number: number | null
          user_id: string | null
          zip_code: number | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          location?: string | null
          logo_img?: string | null
          name?: string | null
          registergericht?: string | null
          registernummer?: string | null
          street?: string | null
          street_number?: number | null
          user_id?: string | null
          zip_code?: number | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          location?: string | null
          logo_img?: string | null
          name?: string | null
          registergericht?: string | null
          registernummer?: string | null
          street?: string | null
          street_number?: number | null
          user_id?: string | null
          zip_code?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shelters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
